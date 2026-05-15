const prisma = require('../config/db');

async function sayHello(req, res) {
  res.send('Hello, World!');
}


async function getPets(req, res) {
  try {
    const pets = await prisma.pet.findMany();
    // select * from pet
    res.status(200).json(pets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function getPetById(req, res) {
  const { id } = req.params;
  try {

    // select * from pet where id = req.params.id
    const pet = await prisma.pet.findUnique({
      where: { id: parseInt(id) }
    });

    if (pet) {
      res.status(200).json(pet);
    } else {
      res.status(404).json({ error: 'Pet not found' });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function insertPet(req, res) {
  
  const { name, owner } = req.body;

  console.log('Received data:', { name, owner });
  try {
    
    const pet = await prisma.pet.create({
      data: {
        name,
        owner 
      }
    });
    res.status(201).json(pet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function deletePet(req,res) {
  const { id } = req.params;
  try {
    await prisma.pet.delete({
      where: { id: parseInt(id) }
    });
    res.status(204).json({ message: 'Pet deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function updatePet(req,res) {
  const { id } = req.params;
  const { name, owner } = req.body;
  try {

    // update pet set name = req.body.name, 
    // owner = req.body.owner where id = req.params.id
    const pet = await prisma.pet.update({
      where: { id: parseInt(id) },
      data: { name, owner }
    });
    res.status(200).json(pet);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports =  { 
  sayHello,
  getPets,
  getPetById,
  insertPet,
  deletePet,
  updatePet
 };
  
 