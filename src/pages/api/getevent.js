import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const distinctEventLinks = await prisma.registration.groupBy({
                by: ['event_link'],
                _count: {
                  event_link: true,
                },
              });
              
              return res.status(200).json({ data: distinctEventLinks });
        } catch (error) {
          console.error("Error fetching distinct event links:", error);
          return res.status(500).json({ data: "Internal Server Error" });
        }
      } else {
        return res.status(405).json({ data: "Method Not Allowed" });
      }
}