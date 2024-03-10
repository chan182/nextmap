import type { NextApiRequest, NextApiResponse } from "next";
import { StoreType } from "@/interface";
import { PrismaClient } from "@prisma/client/extension";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<StoreType[]>
) {
	const prisma = new PrismaClient();
	const stores = await prisma.store.findMany();
	// const stores = (await import("../../data/store_data.json"))[
	// 	"DATA"
	// ] as StoreType[];
	res.status(200).json(stores);
}
