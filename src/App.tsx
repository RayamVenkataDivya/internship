
import './App.css'


function App(){
  const a=100;
  var b=[10,40,30,20]
  var br=[23,45,27,64]
  var br1=[13,14,15,[16,50]]
  const d="divya"
  const x=10;
  const y=20;

  const k="divya"
  const z="chowdary"

  const di="divya"
  const ra="rayam"

  const ar=["divya","harshi","reshma","bhar","sirisha"]

  const rt=14
  const tn=134.42

  const da="divya"

  const dr="divyarayam"
  const s=13;
  const g=34;
  const r=20;

  const c=3;
  const h=2;
  const n=5;
  const ev=34;

  //const j=prompt();

  const im=34;
  const img1="https://th.bing.com/th/id/OIP.Ff1uReC5_lLghzE_oIdyuQHaFj?pid=ImgDet&w=1024&h=768&rs=1"
  const img2="https://th.bing.com/th/id/R.96d07110bab8ff95fc793237692eac80?rik=70XjvDCSjG28og&riu=http%3a%2f%2f2.bp.blogspot.com%2f-WtdFq_e6eKo%2fTV5W5s-hS-I%2fAAAAAAAAAvM%2fgmCUYOx3bX8%2fs1600%2fAnimals_Cats_Small_cat_005241_.jpg&ehk=jaWjwQjQcd4WSiUvZLLKX9XgIq4WvzHoeuwIVVOklJ0%3d&risl=&pid=ImgRaw&r=0"

 const ar1=["https://th.bing.com/th/id/OIP.Ff1uReC5_lLghzE_oIdyuQHaFj?pid=ImgDet&w=1024&h=768&rs=1","https://th.bing.com/th/id/R.96d07110bab8ff95fc793237692eac80?rik=70XjvDCSjG28og&riu=http%3a%2f%2f2.bp.blogspot.com%2f-WtdFq_e6eKo%2fTV5W5s-hS-I%2fAAAAAAAAAvM%2fgmCUYOx3bX8%2fs1600%2fAnimals_Cats_Small_cat_005241_.jpg&ehk=jaWjwQjQcd4WSiUvZLLKX9XgIq4WvzHoeuwIVVOklJ0%3d&risl=&pid=ImgRaw&r=0","https://th.bing.com/th/id/OIP.9nPh5GqDE0eh6zIJZ1bz6gHaEK?pid=ImgDet&rs=1"]
 
 var obj={
         "firstname":"divya",
         "lastname":"chowdary",
         "gender":"female"
 }


 const students=[
        {
          "firstname":"divya",
          "lastname":"chowdary"
            
        },
        {
          "firstname":"bharathi",
          "lastname":"reddy"
            
        },
        {
          "firstname":"sireesha",
          "lastname":"reddy"
            
        },
        {
          "firstname":"harshita",
          "lastname":"chowdary"
            
        },
      ]

const students1=[
        {
          "firstname":"divya",
          "lastname":"chowdary",
          "gender":"female"
            
        },
        {
          "firstname":"bharath",
          "lastname":"reddy",
          "gender":"male"
            
        },
        {
          "firstname":"sireesha",
          "lastname":"reddy",
          "gender":"female"
            
        },
        {
          "firstname":"harshit",
          "lastname":"chowdary",
          "gender":"male"
            
        },
      ]

   const img3="https://th.bing.com/th/id/R.eb7b80ca520d6e7506fd1e83976171a2?rik=GSH%2bE2uXVoPPoA&riu=http%3a%2f%2fwww.snappingturtle.co.za%2fwp-content%2fuploads%2f2017%2f07%2ftestimonial-avatars.png&ehk=xCbyxumDiGZvEcALA69Givsz3EJfqCaoOPoeXW6xBgM%3d&risl=&pid=ImgRaw&r=0"
   const img4="https://i.pinimg.com/736x/5c/db/a9/5cdba979814b074eb2732ff6955a14d4.jpg"


  return (
    
    
    <>

    <h1>Hello World</h1>

    {a}

    <div>{a}</div>

    <ul>
      <li>{b[0]}</li>
      <li>{b[1]}</li>
      <li>{b[2]}</li>
      <li>{b[2]}</li>
    </ul>

    <ul>
    {
    b.map((k)=>{
      return <li>{k}</li>
      
    })
    }
    </ul>

    <h1>{d.toUpperCase()}</h1>


    <h1>JSX</h1>

    <div>{x+y}</div>

    <div>{k.concat(z)}</div>

    <div>{di+ra}</div>

    <ul>
      {
        b.map((f)=>{
        return <li>{f}</li>
      })
      }
    </ul>

    <div>{ar}</div>

    <div>{Math.sqrt(14)}</div>

    <div>{parseInt(tn)}</div>

    <h1>{di.toUpperCase()}</h1>

    <h1>{dr.length}</h1>

    <h1>{dr.split("").reverse().join("")}</h1>

    <h1>{s>g?s:g}</h1>

    <h1>{r%2===0?'even':'odd'}</h1>

    <h1>{r>0?'pos':'neg'}</h1>

    <h1>{c>h?(c>n?c:n):(h>n?h:n)}</h1>

    <h1>{ev%2===0?"even":"odd"}</h1>

    <img src={im%2===0?img1:img2}></img>

    <ul>
    {
    b.map((k)=>{
      return <li>{k*k}</li>
      
    })
    }
    </ul>

   {
    b.sort().map((k)=>{
      return <li>{k}</li>
    })
    }

    <div>{b.concat(br)}</div>
    <div>{`${b},${br}`}</div>

    {
       b.concat(br).sort((a,b)=>{return a>b?1:-1}).map((a)=>{
      return <li>{a}</li>
      })
    }

    <div>{b.concat(br).sort()}</div>


    {
    ar.map((h)=>{
      return<li>{h}</li>
    })
    }


  <ol>
   {
    ar.map((h)=>{
      return<li>{h.toLocaleUpperCase()}</li>
    })
    } 
    </ol>



   <ul>
   {
    ar.map((h)=>{
      return<li>{h.toLocaleLowerCase()}</li>
    })
    }
    </ul>


    {
    ar.map((h)=>{
      return <li>{h.length}</li>
    })
    }

    {
      ar.map((h)=>{
        return <li>{h.slice(0,2)}</li>
      })
      
    }

    {
      ar.map((h)=>{
        return <h1>{h.slice(0,1)}</h1>
      })
      
    }


    {
      ar.map((h)=>{
        return <li>{h.split("").reverse().join("")}</li>
      })
      
    }


    {
      ar.sort().map((h)=>{
        return <li>{h}</li>
      })
      
    }
   


    {
      br.map((h)=>{
        return (h%2===0?<li>{h}</li>:null)
      })
      
    }


    {
      br.map((h)=>{
        return (h%2!==0?<li>{h}</li>:null)
      })
      
    }


    {
      br.map((h)=>{
        return (h>25?<li>{h}</li>:null)
      })
      
    }

    <div>{br1.flat()}</div>

    {
      br.map((h)=>{
        return (h%2===0?<i>{h}</i>:<b>{h}</b>)
      })
      
    }


    {
      b.map((h)=>{
        return (h<25?<li>{h}</li>:null)
      })
      
    }


    {
      b.reduce((accm,a)=>{
        return accm+a
      })
      
    } 


    {
    ar1.map((k)=>{
      return <img src={k}  height="500px" width="400px"></img>

    })
    }


    {
    ar1.map((k)=>{
      return <li><img src={k}></img></li>

    })
    }

  

<table>
  <tr>
  {
    ar1.map((k)=>{
      return <img src={k}  height="500px" width="400px"></img>

    })
    }
  </tr>
</table>



{
Object.entries(obj).map((a)=>{
  return <li>{a[0]}:{a[1]}</li>

})
}



{
Object.entries(obj).map((a)=>{
  return <li>{a[0].toLocaleUpperCase()}:{a[1].toLocaleUpperCase()}</li>

})
}
   


{
students.map((a)=>{
  return Object.entries(a).map((k)=>{
    return <li>{k[0]}:{k[1]}</li>
     
})
})
}


<table border="2px solid">
  <tr>
    {
    students.map((a)=>{
        return <tr><td>{a.firstname}</td><td>{a.lastname}</td></tr>
    })
  }
  </tr>
</table>



<table border="2px solid">
  <tr>
    {
    students1.map((a)=>{
        return <tr><td>{a.firstname}</td><td>{a.lastname}</td><td><img src={a.gender==="female"?img3:img4}></img></td></tr>
    })
  }
  </tr>
</table>



<div>
<div style={{border:'50px  solid skyblue'}} >
  {
   
    <div style={{border:'2px solid',marginBottom:'20px'}}>
      <h1>SLIDE 1</h1>
     
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrDYW7KmPsXBqNwJQpDdltzo1hV1s7iMz9Rg&usqp=CAU'></img>
      <img height="500px" width="400px"src="https://th.bing.com/th/id/OIP.Ff1uReC5_lLghzE_oIdyuQHaFj?pid=ImgDet&w=1024&h=768&rs=1"></img>
      <img src="https://th.bing.com/th/id/R.96d07110bab8ff95fc793237692eac80?rik=70XjvDCSjG28og&riu=http%3a%2f%2f2.bp.blogspot.com%2f-WtdFq_e6eKo%2fTV5W5s-hS-I%2fAAAAAAAAAvM%2fgmCUYOx3bX8%2fs1600%2fAnimals_Cats_Small_cat_005241_.jpg&ehk=jaWjwQjQcd4WSiUvZLLKX9XgIq4WvzHoeuwIVVOklJ0%3d&risl=&pid=ImgRaw&r=0"></img>
   </div>
}
{
     <div style={{border:'2px solid', marginBottom:'10px'}}>
      <h1>SLIDE 2</h1>
     <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4GCtZMzmnVwuqdgNzniwrRQhYuPHXziD8TQ&usqp=CAU'></img>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjGEIKf5RT-lxMxx_qOrK4opqQMOecvvGn9w&usqp=CAU'></img>
   </div>
  }
  </div>
  </div>



  





     



    
    

    </>
  )
  }
  
  
  export default App
