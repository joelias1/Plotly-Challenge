function importData() {
    //Read the json file
        d3.json("samples.json").then (sampledata =>{
            console.log(sampledata)
        });    
            // var meta = sampledata.samples[0].otu_ids;
            // console.log(meta)
            // var sampleValues =  sampledata.samples[0].sample_values.slice(0,10).reverse();
            // console.log(sampleValues)
    // Get the top 10 id's    