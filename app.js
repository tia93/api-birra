fetch('https://api.punkapi.com/v2/beers')
.then(resp => resp.json()).then(res => displayBirre(res));

function displayBirre(birre) {
   const container = document.getElementById('container'); 
   for (const birra of birre) {
    console.log(birra);
    const divBirra = document.createElement('div');
    divBirra.classList.add('birraaa');

    const id = document.createElement('h2');
    id.innerHTML = 'Id : ' + birra.id;
    divBirra.appendChild(id);

    const nome = document.createElement('h2');
    nome.innerHTML = 'Nome : ' + birra.name;
    divBirra.appendChild(nome);

    const tagline = document.createElement('h2')
    tagline.innerHTML = 'Slogan : ' + birra.tagline; 
    divBirra.appendChild(tagline);

    const first_brewed = document.createElement('h2');
    first_brewed.innerHTML = 'Prodotta dal :' + birra.first_brewed;
    divBirra.appendChild(first_brewed);

    const description = document.createElement('p');
    description.innerHTML = '<b> Descrizione : </b>' + birra.description;
    divBirra.appendChild(description);

    const image_url = document.createElement('img');
    image_url.src = birra.image_url;
    image_url.classList.add('imgg');
    divBirra.appendChild(image_url);

    const abv = document.createElement('h2');
    abv.innerHTML = ' abv : ' + birra.abv;
    abv.classList.add('item');
    divBirra.appendChild(abv);

    const ibu = document.createElement('h2');
    ibu.innerHTML = ' ibu :' + birra.ibu;
    ibu.classList.add('item');
    divBirra.appendChild(ibu);

    const target_fg = document.createElement('h2');
    target_fg.innerHTML = ' target_fg : ' + birra.target_fg;
    target_fg.classList.add('item');
    divBirra.appendChild(target_fg);

    const target_og = document.createElement('h2');
    target_og.innerHTML = ' target_og : ' + birra.target_og;
    target_og.classList.add('item');
    divBirra.appendChild(target_og);

    const ebc = document.createElement('h2');
    ebc.innerHTML = ' ebc : ' + birra.ebc;
    ebc.classList.add('item');
    divBirra.appendChild(ebc);

    const srm = document.createElement('h2');
    srm.innerHTML = ' srm : ' + birra.srm;
    srm.classList.add('item');
    divBirra.appendChild(srm);

    const ph = document.createElement('h2');
    ph.innerHTML = ' ph : ' + birra.ph;
    ph.classList.add('item');
    divBirra.appendChild(ph);

    const attenuation_level = document.createElement('h2');
    attenuation_level.innerHTML = ' attenuation_level : ' + birra.attenuation_level;
    attenuation_level.classList.add('item')
    divBirra.appendChild(attenuation_level);

    const volume = document.createElement('h2');
    volume.innerHTML = 'volume : ' + birra.volume.value + ' ' + birra.volume.unit;
    volume.classList.add('item')
    divBirra.appendChild(volume)

    const boil_volume = document.createElement('h2');
    boil_volume.innerHTML = ' boil_volume : ' + birra.boil_volume.value + ' ' + birra.boil_volume.unit;
    boil_volume.classList.add('item')
    divBirra.appendChild(boil_volume);

    const method = document.createElement('h2');
    method.innerHTML =   ' method : ' + 'Value : ' + '' + birra.method.mash_temp[0].temp.value + ', ' + 'Unit : ' + '' + birra.method.mash_temp[0].temp.unit + ', ' + ' ' + 'Duration :' + ' ' + birra.method.mash_temp[0].duration;
    method.classList.add('item')
    divBirra.appendChild(method);

   //  const method1 = document.createElement('ul');
   //  for (const metho of birra.method.mash_temp) {
   //     const methoArray = document.createElement('li');
   //     methoArray.innerHTML = ' method : ' + 'Value : ' + '' + metho.temp.value + ',' + 'Unit : ' + ' ' + metho.temp.unit + ' ' + 'Duration : ' + ' ' + metho.duration;
   //     method1.appendChild(methoArray); 
   //  }
   //  divBirra.appendChild(method1);


    const fermentation = document.createElement('h2');
    fermentation.innerHTML = 'fermentation : ' + birra.method.fermentation.temp.value + ' ' + birra.method.fermentation.temp.unit + ' ' + birra.method.twist;
    fermentation.classList.add('item')
    divBirra.appendChild(fermentation);

    const titoloDiv = document.createElement('div');
    titoloDiv.classList.add('divv');
    divBirra.appendChild(titoloDiv);

    const titoloingredients = document.createElement('h2');
    titoloingredients.innerHTML = 'ingredients : ';
    titoloDiv.appendChild(titoloingredients);

    const ingredients = document.createElement('ul');
    for (const ingredient of birra.ingredients.malt) {
      const ingredientArray = document.createElement('li');
      ingredientArray.innerHTML =  ingredient.name + ' ' + ingredient.amount.value + ' ' + ingredient.amount.unit;
      ingredients.appendChild(ingredientArray);
    }
    titoloDiv.appendChild(ingredients);

    const titoloHope = document.createElement('h2');
    titoloHope.innerHTML = 'hops : ';
    titoloDiv.appendChild(titoloHope);

    const hops = document.createElement('ul');
    for (const hop of birra.ingredients.hops) {
      const hopArry = document.createElement('li');
      hopArry.innerHTML = hop.name + ' ' + hop.amount.value + ' ' + hop.amount.unit + ' ' + hop.add + ' ' + hop.attribute;
      hops.appendChild(hopArry)
    }
    titoloDiv.appendChild(hops);

    const yeast = document.createElement('h2');
    yeast.innerHTML = 'Yeast : ' + birra.ingredients.yeast;
    titoloDiv.appendChild(yeast);

    const titoloFoodPairing = document.createElement('h2');
    titoloFoodPairing.innerHTML = ' Food pairing : ';
    titoloDiv.appendChild(titoloFoodPairing);

    const food_pairing = document.createElement('ul');
    for (const pairing of birra.food_pairing) {
      const pairingArry = document.createElement('li');
      pairingArry.innerHTML = pairing;
      food_pairing.appendChild(pairingArry);
    }
    titoloDiv.appendChild(food_pairing);

    const brewers_tips = document.createElement('p');
    brewers_tips.innerHTML = '<b> Brewers_tips: </b>' + birra.brewers_tips;
    titoloDiv.appendChild(brewers_tips);

    const contributed_by = document.createElement('h3');
    contributed_by.innerText = 'Contributed by : ' + birra.contributed_by;
    titoloDiv.appendChild(contributed_by);





    










    container.appendChild(divBirra);
   }
}