const { log } = require('console');
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path'); // ✅ correct usage

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // This is necessary to parse form data


// ✅ serving static files (e.g. CSS, images, JS)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    fs.readdir('./files', function(err, files) {
        res.render("index", { files: files || [] });
    });
});


app.get('/file/:filename', function(req, res) {
    fs.readFile(`./files/${req.params.filename}`,"utf8" , function(err, filedata){
        // console.log(filedata);
        res.render('show',{filename: req.params.filename , filedata:filedata}
        )
        
    })
});


app.get('/edit/:filename', function(req, res) {
    res.render('edit', {filename: req.params.filename})
   
})

app.post('/edit', function(req, res) {
    // console.log(req.body);
    fs.rename(`./files/${req.body.previous}`, `./files/${req.body.new}` , function(err){
        res.redirect("/")
    })
   
})

// app.get('/files/:filename', (req, res) => {
//     console.log(req.params.filename);  // ✅ This should print filename
//   });

// app.post('/create', function(req, res) {
//     console.log(req.body);
// });
    
app.post('/create', function(req, res) {
    // console.log(req.body);  // This will print the form data to the console
    // res.send('Data received');

    fs.writeFile(`./files/${req.body.title.split('.').join('')}.txt`, req.body.details, function(err){
        res.redirect("/")

    })
});

// app.listen(3000);

app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000');
    });