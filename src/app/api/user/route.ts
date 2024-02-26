import { NextResponse } from "next/server";
import { baseUrlApiConsult } from "@/helpers/baseUrlApis";

export async function POST(request: Request) {
  const JSON = await request.json();

  let api = baseUrlApiConsult;
  if (JSON.type_doc === "dni") {
    api += "reniec/";
  } else {
    api += "sunat/";
  }

  const response = await fetch(
    `${api}/${JSON.type_doc}?numero=${JSON.nro_doc}`,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TOKEN_CONSULT_DOC}`,
      },
    }
  );

  const data = await response.json();

  return NextResponse.json(data);
}
