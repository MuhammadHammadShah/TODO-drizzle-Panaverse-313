import { NextRequest, NextResponse } from "next/server";

export function Get() {
  return NextResponse.json({
    message: "You are calling this api. ",
  });
}
