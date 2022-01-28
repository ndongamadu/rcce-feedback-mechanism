let numberCountriesCFM = 0;
let regionsArr = ['All regions'],
    organisationsArr = ['All organizations'];
let countriesISO3Arr = [];

function choroplethMap(){
    mapsvg.selectAll('path').each( function(element, index) {
        // console.log(element)
        d3.select(this).transition().duration(500).attr('fill', function(d){
            //var filtered = filteredCfmData.filter(pt => pt['ISO3']== d.properties.ISO_A3);
            return '#ccc';
        });
    });
}

