import { NextResponse } from "next/server";
import { put, list } from "@vercel/blob";

export async function GET() {
  try {
    // Try to get the current page views from blob storage
    const { blobs } = await list({ prefix: "page-views.txt" });

    if (blobs.length > 0) {
      // Fetch the content of the blob
      const response = await fetch(blobs[0].url);
      const currentViews = await response.text();
      return NextResponse.json({ views: parseInt(currentViews) || 0 });
    }

    // If file doesn't exist, return 0
    return NextResponse.json({ views: 0 });
  } catch {
    return NextResponse.json({ views: 0 }, { status: 500 });
  }
}

export async function POST() {
  try {
    let currentViews = 0;

    // Try to get current count
    const { blobs } = await list({ prefix: "page-views.txt" });

    if (blobs.length > 0) {
      const response = await fetch(blobs[0].url);
      const viewsText = await response.text();
      currentViews = parseInt(viewsText) || 0;
    }

    // Increment the view count
    const newViews = currentViews + 1;

    // Store the updated count in Vercel Blob
    const { url } = await put("page-views.txt", newViews.toString(), {
      access: "public",
    });

    return NextResponse.json({ views: newViews, url });
  } catch {
    return NextResponse.json(
      { error: "Failed to update page views" },
      { status: 500 }
    );
  }
}
