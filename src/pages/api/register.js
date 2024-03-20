import prisma from "../../../lib/prisma"

export default async function handler(req, res) {
  if(req.method === 'POST') {
    try {
      const checkIfExist = await prisma.registration.findFirst({
        where: {
          email_0: req.body.email_0, 
          event_link: req.body.event_link
        },
      });
      if(checkIfExist!==null) {
        res.status(400).json({result: 'already registered'});
      }
      else {
        const result = await prisma.registration.create({
          data: {
            ...req.body,
            creationDate: new Date()
          },
        });
        res.status(200).json({ result: 'registered successfully' });
      }
    }
    catch(error) {
      res.status(500).json({error: "An error occurred"});
    }
  }
  else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
