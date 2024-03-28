import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    if (req.body.key === "amal") {
    try {
      const usersData =  await prisma.registration.findMany({
        where: {
          event_link:req.body.event,
        },
      });
      console.log(usersData)
      return res.status(200).json({ data: usersData });
    } catch (error) {
      console.error("Error fetching users:", error);
      return res.status(500).json({ data: "Internal Server Error" });
    }
  }
  else{
    return res.status(200).json({ });
  } 
}else {
  return res.status(405).json({ data: "Method Not Allowed" });
}
}