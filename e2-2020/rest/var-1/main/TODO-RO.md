#Subiect 3 (2.5 pts)
#TOPIC: REST

# Dată fiind aplicația `app` completați metodele `PUT` si `DELETE` la adresa `/ships/id`:

- Daca se incerca modificarea unei nave inexistente raspunsul trebuie sa fie `{"message": "not found"}`. Codul de raspuns va fi: `404`; (0.5 pts)
- Daca se incearca modificarea unei nave existente raspunsul trebuie sa fie `{"message": "accepted"}`. Codul de raspuns va fi: `202`; (0.5 pts)
- O cerere get ulterioara la adresa navei editate trebuie sa reflecte modificarile. Codul de raspuns va fi: `200`; (0.5 pts)
- Daca se incearca stergerea unei nave existente raspunsul trebuie sa fie `{"message": "accepted"}`. Codul de raspuns va fi: `202`; (0.5 pts)
- O cerere get ulterioara la adresa navei sterse trebuie sa returneze `{"message": "not found"}`. Codul de raspuns va fi: `404`; (0.5 pts)
- 
app.put('/ships/:id', async (req, res) => {
    let ship= await Ship.findByPk(req.params.id)
    if(ship)
    {
        await ship.update(req.body)
        res.status(202).json({message:"accepted"});

    }
            else
        {
            res.status(404).json({message:"not found"});
        }
    
})

app.delete('/ships/:id', async (req, res) => {
    let ship = await Ship.findByPk(req.params.id)
        if(ship)
        {
            await ship.destroy();
            res.status(202).json({message:"accepted"});
            
        }
        else
        {
            res.status(404).json({message:"not found"});
        }
})
