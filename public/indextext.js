class indexContent{

    constructor (id, title, desc, para){
    this.id = id;
    this.title = title;
    this.desc = desc;
    this.para = para;
}
}


const nopoverty = new indexContent(1,"No Poverty", "End poverty in all its forms everywhere.",
"Eradicating poverty is not a task of charity, it’s an act of justice and the key to unlocking an enormous human potential. Still, nearly half of the world’s population lives in poverty, and lack of food and clean water is killing thousands every single day of the year. Together, we can feed the hungry, wipe out disease and give everyone in the world a chance to prosper and live a productive and rich life.");

const energy = new indexContent(2, "Clean and Affordable Energy", "dEnsure access to affordable, reliable, sustainable and modern energy for all.", 
"Renewable energy solutions are becoming cheaper, more reliable and more efficient every day.Our current reliance on fossil fuels is unsustainable and harmful to the planet, which is why we have to change the way we produce and consume energy. Implementing these new energy solutions as fast as possible is essential to counter climate change, one of the biggest threats to our own survival.");

const climate = new indexContent(3, "Climate Action", "Take urgent action to combat climate change and its impacts.",
"Climate change is a real and undeniable threat to our entire civilization.The effects are already visible and will be catastrophic unless we act now. Through education, innovation and adherence to our climate commitments, we can make the necessary changes to protect the planet. These changes also provide huge opportunities to modernize our infrastructure which will create new jobs and promote greater prosperity across the globe.");



const IndexContent = [];

IndexContent.push(nopoverty);
IndexContent.push(energy);
IndexContent.push(climate);

console.log(IndexContent.length);

IndexContent.map((item)=>{
    console.log(`item ${item.id}`);
})

const sectionCenter = document.querySelector("#section-center");


function loadContent(){
    let displayItem = IndexContent.map( (item) => {
        return `
        <article class="item">
        <h1 src=${item.title} h2=${item.desc}  p=${item.para} class="photo"/>
        </article>
        
        `;
    });
    displayItem = displayItem.join("");
    console.log(displayItem);
    sectionCenter.innerHTML = displayItem;
};

windoww.addEventListener("DOMContentLoaded", loadContent, false);
//we decided not to display this text content on the index page to keep text minimal