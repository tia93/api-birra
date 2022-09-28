fetch('https://api.punkapi.com/v2/beers')
.then(resp => resp.json()).then(res => displayBirra(res));

function displayBirra(birre) {
    const container = document.getElementById('container');
    for (const birra of birre) {
        console.log(birra);
        const divBirra = document.createElement('div');
        divBirra.classList.add('birraa');

        const id = document.createElement('h2');
        id.innerHTML = '<b>Id : </b>' + birra.id;
        divBirra.appendChild(id);

        const name = document.createElement('h2');
        name.innerHTML = '<b>Name : </b>' + birra.name;
        divBirra.appendChild(name);

        const tagline = document.createElement('h2');
        tagline.innerHTML = '<b>Tagline : </b>' + birra.tagline;
        divBirra.appendChild(tagline);

        const firstBrewed = document.createElement('h2');
        firstBrewed.innerHTML = '<b> First Brewed : </b>' + birra.first_brewed;
        divBirra.appendChild(firstBrewed);

        const description = document.createElement('p');
        description.innerHTML = '<b>Description : </b>' + birra.description;
        divBirra.appendChild(description);

        const img = document.createElement('img');
        img.src = birra.image_url;
        img.classList.add('imgg');
        divBirra.appendChild(img);

        const abv = document.createElement('h2');
        abv.innerHTML = '<b>Abv : </b>' + birra.abv;
        divBirra.appendChild(abv);

        const ibu = document.createElement('h2');
        ibu.innerHTML = '<b>Ibu : </b>' + birra.ibu;
        divBirra.appendChild(ibu);


        const targetFg = document.createElement('h2');
        targetFg.innerHTML = '<b>Target Fg : </b>' + birra.target_fg;
        divBirra.appendChild(targetFg);

        const targetOg = document.createElement('h2');
        targetOg.innerHTML = '<b>Target Og : </b>' + birra.target_og;
        divBirra.appendChild(targetOg);

        const ebc = document.createElement('h2');
        ebc.innerHTML = '<b>ebc : </b>' + birra.ebc;
        divBirra.appendChild(ebc);

        const srm = document.createElement('h2');
        srm.innerHTML = '<b>Srm : </b>' + birra.srm;
        divBirra.appendChild(srm);

        const ph = document.createElement('h2');
        ph.innerHTML = '<b>Ph : </b>' + birra.ph;
        divBirra.appendChild(ph);

        const attenuationLevel = document.createElement('h2');
        attenuationLevel.innerHTML = '<b>Attenuation Level :</b>' + birra.attenuation_level;
        divBirra.appendChild(attenuationLevel);

        const volume = document.createElement('ul');
        volume.innerHTML = '<h2>volume  </h2>' + '<li>Value  : </li>' + birra.volume.value + '<li>Unit  : </li>' + birra.volume.unit;
        divBirra.appendChild(volume);

        const boilVolume = document.createElement('ul');
        boilVolume.innerHTML = '<h2>Boil Volume </h2>' + '<li>Value : </li>' + birra.boil_volume.value + '<li>Unit : </li>' + birra.boil_volume.unit;
        divBirra.appendChild(boilVolume);

        const titoloMethod = document.createElement('ul');
        titoloMethod.innerHTML = '<h2>Mash temp </h2>';
        divBirra.appendChild(titoloMethod);

        const method = document.createElement('ul');
        for (const temp1 of birra.method.mash_temp) {
            tempArray = document.createElement('li');
            tempArray.innerHTML =  '<li>Value : </li>' + temp1.temp.value + ' ' + '<li>Unit : </li>' + temp1.temp.unit + ' ' + '<li>Duration : </li>' + temp1.duration + ' ' ;
            method.appendChild(tempArray);
        }
        divBirra.appendChild(method);


        const fermentation = document.createElement('ul');
        fermentation.innerHTML = '<h2>Fermentation </h2>' + '<li>Value : </li>' + birra.method.fermentation.temp.value +  '<li>Unit : </li>' + birra.method.fermentation.temp.unit +  '<li>Twist : </li> ' + birra.method.twist;
        divBirra.appendChild(fermentation);

        const titoloIngredient = document.createElement('ul');
        titoloIngredient.innerHTML = '<h2>Ingredient </h2>';
        divBirra.appendChild(titoloIngredient);

        const ingredients = document.createElement('ul');
        for (const ingredient of birra.ingredients.malt) {
        const  ingredientArry = document.createElement('li');
            ingredientArry.innerHTML =  ingredient.name + ' , ' + ingredient.amount.value + ' ' + ingredient.amount.unit;
            ingredients.appendChild(ingredientArry);
        }
        divBirra.appendChild(ingredients);

        const titolohops = document.createElement('ul');
        titolohops.innerHTML = '<h2>Hops </h2>';
        divBirra.appendChild(titolohops)


        const hopes = document.createElement('ul');
        for (const hop of birra.ingredients.hops) {
            const hopsArry = document.createElement('li');
            hopsArry.innerHTML = hop.name + ' ' + hop.amount.value + ' ' + hop.amount.unit + ' ' + hop.add + ' ' + hop.attribute;
            hopes.appendChild(hopsArry);
        } 
        divBirra.appendChild(hopes);

        const yeast = document.createElement('h2');
        yeast.innerHTML = '<b>Yeast : </b> ' +  birra.ingredients.yeast; 
        divBirra.appendChild(yeast);

        const titoloFoodPairing = document.createElement('ul');
        titoloFoodPairing.innerHTML = '<h2>Food Pairing </h2>';
        divBirra.appendChild(titoloFoodPairing);

        const foodPairing = document.createElement('ul');
        for (const paring of birra.food_pairing) {
            const paringArry = document.createElement('li');
            paringArry.innerHTML = paring;
            foodPairing.appendChild(paringArry);
        }
        divBirra.appendChild(foodPairing);

        const brewersTips = document.createElement('p');
        brewersTips.innerHTML = '<h2>Brewers Tips : </h2>' + birra.brewers_tips;
        divBirra.appendChild(brewersTips)





       




        


        container.appendChild(divBirra)
        
    }
}