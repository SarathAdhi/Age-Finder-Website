import './home.css'

function Home(){

    function display(){
        var date = document.querySelector('.date').value
        var birthDate = new Date(date);
        
        var diff = Date.now() - birthDate.getTime(); 
        var  ageDate = new Date(diff); 
        var result = Math.abs(ageDate.getUTCFullYear() - 1970);
        
        if(result < 10)
            document.querySelector('.display-result').innerHTML = "Your are a cute " + result + " years old baby👶."
        else if(result < 18)
            document.querySelector('.display-result').innerHTML = "Your are " + result + " years old. Still you have " + (18-result) + " years to apply for your driving license.";
        else if(result === 18)
            document.querySelector('.display-result').innerHTML = "Your are " + result + " teeeeeen years old. Congrats.";
        else if(result <= 25)
            document.querySelector('.display-result').innerHTML = "Your are " + result + " years old. Hope your have a job 😂";
        else if(result <= 40)
            document.querySelector('.display-result').innerHTML = "Your are " + result + " years old. Don't eat non-veg, be healthy.";
        else
            document.querySelector('.display-result').innerHTML = "Your are " + result + " years old. But still you are young ❤️.";
    }

    return (
        <div className='home'>
            <h1 className='display-result'></h1>
            <div className='home-container'>
                <h1 className='title'>Enter your Birthday</h1>
                <input className='date' type="date"/>
                <input className='btn' type="button"  data-date-format="DD MM YYYY" value="Submit" onClick={display}/>
            </div>
        </div>
    )
}

export default Home;