//CONSTS
NUM_INGREDIENTS = 5


function generate(){

aItemWords = new Array();
finalItems = "";
iCounter = 0;

// VEGETABLES AND FRUITS
// A Items
aItemWords[iCounter]="alfalfa sprouts"

aItemWords[iCounter++]="almonds"

aItemWords[iCounter++]="apples"

aItemWords[iCounter++]="apricots"

aItemWords[iCounter++]="artichoke"

aItemWords[iCounter++]="arugula"

aItemWords[iCounter++]="asparagus"

aItemWords[iCounter++]="avocado"

// B Items
aItemWords[iCounter++]="banana"

aItemWords[iCounter++]="bean sprouts"

aItemWords[iCounter++]="beets"

aItemWords[iCounter++]="blackberries"

aItemWords[iCounter++]="blueberries"

aItemWords[iCounter++]="broccoli"

aItemWords[iCounter++]="brussels sprouts"

aItemWords[iCounter++]="button mushrooms"

// C Items
aItemWords[iCounter++]="cabbage"

aItemWords[iCounter++]="carrots"

aItemWords[iCounter++]="cauliflower"

aItemWords[iCounter++]="celery"

aItemWords[iCounter++]="chili peppers"

aItemWords[iCounter++]="coffee"

aItemWords[iCounter++]="cranberries"

aItemWords[iCounter++]="cucumber"


// F Items
aItemWords[iCounter++]="feta cheese"

aItemWords[iCounter++]="frozen tots"

// G Items
aItemWords[iCounter++]="garlic"

aItemWords[iCounter++]="grapes"

aItemWords[iCounter++]="green beans"

aItemWords[iCounter++]="green bell peppers"

// H Items
aItemWords[iCounter++]="hazelnuts"

// I Item
aItemWords[iCounter++]="ice cream cones"
// J Items
// K Items
aItemWords[iCounter++]="kiwi"

// L Items
aItemWords[iCounter++]="leeks"

aItemWords[iCounter++]="lemon"

aItemWords[iCounter++]="lettuce"

aItemWords[iCounter++]="lime"

// M Items
aItemWords[iCounter++]="mango"

aItemWords[iCounter++]="mustard"

aItemWords[iCounter++]="mushrooms"

aItemWords[iCounter++]="marshmallows"

aItemWords[iCounter++]="mint leaves"

aItemWords[iCounter++]="maple syrup"

// N Items
// O Items
aItemWords[iCounter++]="olives"

aItemWords[iCounter++]="onion"

aItemWords[iCounter++]="orange"

// P Items
aItemWords[iCounter++]="parsley"

aItemWords[iCounter++]="peaches"

aItemWords[iCounter++]="pears"

// Q Items
// R Items
aItemWords[iCounter++]="radicchio"

aItemWords[iCounter++]="radish greens"

aItemWords[iCounter++]="radish root"

aItemWords[iCounter++]="red bell peppers"

aItemWords[iCounter++]="raspberries"

// S Items
aItemWords[iCounter++]="scallions"

aItemWords[iCounter++]="shiitake mushrooms"

aItemWords[iCounter++]="spinach"

aItemWords[iCounter++]="strawberries"

aItemWords[iCounter++]="sunflower seeds"

aItemWords[iCounter++]="summer squash"

// T Items
aItemWords[iCounter++]="tomatilla"

aItemWords[iCounter++]="tomato"

// W Items
aItemWords[iCounter++]="walnuts"

aItemWords[iCounter++]="water chestnuts"

aItemWords[iCounter++]="winter squash"

// Z Items
aItemWords[iCounter++]="zucchini"


// MEATS AND CHEESES AND OTHER PROTEINS
// B Items
aItemWords[iCounter++]="bacon"

aItemWords[iCounter++]="beef"

// C Items
aItemWords[iCounter++]="Cheddar cheese"

aItemWords[iCounter++]="chicken"

aItemWords[iCounter++]="clams"

aItemWords[iCounter++]="cottage cheese"

aItemWords[iCounter++]="cream cheese"

// E Items
aItemWords[iCounter++]="edamame"

aItemWords[iCounter++]="egg"

aItemWords[iCounter++]="eggplant"

// H Items
aItemWords[iCounter++]="ham"

aItemWords[iCounter++]="honey"

// M Items
aItemWords[iCounter++]="mozzarella"

aItemWords[iCounter++]="mussels"

aItemWords[iCounter++]="mutton"

// O Items
aItemWords[iCounter++]="oysters"

// P Items
aItemWords[iCounter++]="Parmesan cheese"

aItemWords[iCounter++]="peanuts"

aItemWords[iCounter++]="pork"

// R Items
aItemWords[iCounter++]="Ricotta cheese"

// S Items
aItemWords[iCounter++]="sardines"

aItemWords[iCounter++]="Swiss cheese"

// T Items
aItemWords[iCounter++]="tofu"

aItemWords[iCounter++]="turkey"

aItemWords[iCounter++]="canned tuna"



// STARCHY FOODS
// A Items
aItemWords[iCounter++]="acorn squash"

// B Items
aItemWords[iCounter++]="black beans"

aItemWords[iCounter++]="black-eyed peas"

aItemWords[iCounter++]="butternut squash"

// C Items
aItemWords[iCounter++]="corn"

// G Items
aItemWords[iCounter++]="garbanzo beans"

// K Items
aItemWords[iCounter++]="kidney beans"

// L Items
aItemWords[iCounter++]="lentils"

aItemWords[iCounter++]="lima beans"

// O Items
aItemWords[iCounter++]="oats"

// P Items
aItemWords[iCounter++]="peas"

aItemWords[iCounter++]="pumpkin"

aItemWords[iCounter++]="potatoes (Russet)"

aItemWords[iCounter++]="potatoes (red)"

// Q Items
aItemWords[iCounter++]="quinoa"

// R Items
aItemWords[iCounter++]="ramen noodles"

aItemWords[iCounter++]="red beans"

aItemWords[iCounter++]="rice"


aItemCount = new Array();
for(i = 0; i < iCounter; i++){
	aItemCount[i]=0;
}


for(i = 0; i < 5; i++) {
	temp = Math.floor(Math.random() * iCounter);
	if(aItemCount[temp]==1){
		i--;
	}
	else {
		aItemCount[temp] = 1;
		finalItems += aItemWords[temp] + " ";
	}
}

return finalItems;

}

var div = document.getElementById("append");
div.innerHTML += generate();
