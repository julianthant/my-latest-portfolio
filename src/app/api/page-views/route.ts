import { NextResponse } from "next/server";
import { put, list, del } from "@vercel/blob";

export async function GET() {
  try {
    // Try to get the current page views from blob storage
    const { blobs } = await list({ prefix: "page-views-" });

    if (blobs.length > 0) {
      // Sort by pathname to get the latest one
      const latestBlob = blobs.sort((a, b) => b.pathname.localeCompare(a.pathname))[0];
      
      // Fetch the content of the blob
      const response = await fetch(latestBlob.url);
      const currentViews = await response.text();
      return NextResponse.json({ views: parseInt(currentViews) || 0 });
    }

    // If file doesn't exist, return 0
    return NextResponse.json({ views: 0 });
  } catch (error) {
    return NextResponse.json({ 
      views: 0, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 });
  }
}

export async function POST() {
  try {
    // Check if we have the blob token
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      return NextResponse.json({ 
        error: "Blob token not configured" 
      }, { status: 500 });
    }

    let currentViews = 0;

    // Try to get current count and clean up old blobs
    try {
      const { blobs } = await list({ prefix: "page-views-" });

      if (blobs.length > 0) {
        // Sort by pathname to get the latest one
        const sortedBlobs = blobs.sort((a, b) => b.pathname.localeCompare(a.pathname));
        const latestBlob = sortedBlobs[0];
        
        // Get the current count
        const response = await fetch(latestBlob.url);
        const viewsText = await response.text();
        currentViews = parseInt(viewsText) || 0;
        
        // Delete all old blobs to keep storage clean
        for (const blob of blobs) {
          await del(blob.url);
        }
      }
    } catch (listError) {
      // If listing fails, start from 0
      currentViews = 0;
    }

    // Increment the view count
    const newViews = currentViews + 1;

    // Create a new blob with timestamp to ensure uniqueness
    const timestamp = Date.now();
    const { url } = await put(`page-views-${timestamp}.txt`, newViews.toString(), {
      access: "public",
    });

    return NextResponse.json({ views: newViews, url });
  } catch (error) {
    return NextResponse.json({
      error: "Failed to update page views",
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
