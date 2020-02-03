const app = require('./app')

app.post("/ships", async(req,res,next)=>{
     try {
        // check if the request body is empty
        if (req.body.constructor !== Object || Object.keys(req.body).length === 0) {
            res.status(400).json({
                message : 'body is missing'
            });
        } else {
            // if properties are missing from the request body
            if (req.body.name === undefined || req.body.portOfSail === undefined || req.body.displacement === undefined) {
                res.status(400).json({
                    message : 'malformed request'
                });
            } else {
                // check if the displacement is correct
                if (req.body.displacement < 1000) {
                    res.status(400).json({
                        message : 'displacement should be over 1000'
                    });
                } else {
                    // finally if everything is ok create the ship
                    await Ship.create(req.body);
                    res.status(201).json({
                        message : 'created'
                    });
                }
            }
        }
    } catch (err) {
        console.warn(err);
    }
});

app.listen(8080, () => {
    console.log('Server started on port 8080...')
})