import Cartes from './component/Cartes'

import './App.css'

function App() {
  const tables=[
    {lien:'https://th.bing.com/th?q=Pokemon+Pikachu&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=fr-FR&cc=FR&setlang=fr&adlt=strict&t=1&mw=247',
    nom:'Noss',
    cout:56,
    explication:'jjjxdjkkxsksxkkskskskksk'

    },
    {lien:'https://th.bing.com/th/id/OIP.7TVTDgSoKhE5CzXCtnb2kAHaE8?w=280&h=187&c=7&r=0&o=5&pid=1.7',
    nom:'Noss',
    cout:50,
    explication:'https://th.bing.com/th/id/OIP.o-ymyJcyZFEJlJj8LYpB6gHaHa?w=189&h=187&c=7&r=0&o=5&pid=1.7'

    },
    {lien:'https://th.bing.com/th/id/OIP.7TVTDgSoKhE5CzXCtnb2kAHaE8?w=280&h=187&c=7&r=0&o=5&pid=1.7',
    nom:'Noss',
    cout:50,
    explication:'https://th.bing.com/th/id/OIP.RauqPAlJUyn8KcxMRAGqWgHaJE?w=152&h=187&c=7&r=0&o=5&pid=1.7'

    },
    {lien:'https://th.bing.com/th/id/OIP.zj0skOTQUBolfmKDoiwU3gHaFz?w=214&h=180&c=7&r=0&o=5&pid=1.7',
    nom:'Noss',
    cout:50,
    explication:'https://th.bing.com/th/id/OIP.o-ymyJcyZFEJlJj8LYpB6gHaHa?w=189&h=187&c=7&r=0&o=5&pid=1.7'

    },
    {lien:'https://th.bing.com/th/id/OIP.7TVTDgSoKhE5CzXCtnb2kAHaE8?w=280&h=187&c=7&r=0&o=5&pid=1.7',
    nom:'Noss',
    cout:50,
    explication:'https://th.bing.com/th/id/OIP.o-ymyJcyZFEJlJj8LYpB6gHaHa?w=189&h=187&c=7&r=0&o=5&pid=1.7'

    },
    {lien:'https://th.bing.com/th/id/OIP.7TVTDgSoKhE5CzXCtnb2kAHaE8?w=280&h=187&c=7&r=0&o=5&pid=1.7',
    nom:'Noss',
    cout:50,
    explication:'https://th.bing.com/th/id/OIP.o-ymyJcyZFEJlJj8LYpB6gHaHa?w=189&h=187&c=7&r=0&o=5&pid=1.7'

    },
    {lien:'https://th.bing.com/th/id/OIP.7TVTDgSoKhE5CzXCtnb2kAHaE8?w=280&h=187&c=7&r=0&o=5&pid=1.7',
    nom:'Noss',
    cout:50,
    explication:'https://th.bing.com/th/id/OIP.o-ymyJcyZFEJlJj8LYpB6gHaHa?w=189&h=187&c=7&r=0&o=5&pid=1.7'

    },
    {lien:'https://th.bing.com/th/id/OIP.Sk-7C2x2XN-rT00NcGZi8gHaEK?w=265&h=184&c=7&r=0&o=5&pid=1.7',
    nom:'Noss',
    cout:569,
    explication:'jjjxdjkkxsksxkkskskskksk'

    },
    {lien:'https://th.bing.com/th/id/OIP.hki8PF1T0vDv-bWcIx8A2gHaIA?w=153&h=180&c=7&r=0&o=5&pid=1.7',
    nom:'Noss',
    cout:326,
    explication:" Si tu ne comprends pas, ou ne maîtrises pas, la notion de coefficient binomial, inutile de chercher à calculer toi-même les nombres de Catalan, que tu découvris dans cette obscure revue américaine d'algèbre, croyant qu'il s'agissait de"

    },
    {lien:'https://th.bing.com/th/id/OIP.hki8PF1T0vDv-bWcIx8A2gHaIA?w=153&h=180&c=7&r=0&o=5&pid=1.7',
    nom:'Noss',
    cout:56,
    explication:'jjjxdjkkxsksxkkskskskksk'

    },
  ]

  return (
      // <Cartes lien='https://th.bing.com/th/id/OIP.OjAmIvE9b0gLSS1pe6nelQHaEK?w=302&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' nom="Pikachu" cout='4'  explication='
      // Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus blanditiis sed obcaecati, odio adipisci aspernatur reprehenderit voluptatum, quis eveniet libero quasi eius numquam quo fuga possimus cumque ratione incidunt temporibus!'></Cartes>
        <>
        {tables.map((a)=>(
          <Cartes lien={a.lien} nom={a.nom} cout={a.cout} explication={a.explication}></Cartes>
        ))}
        </>

  )
}

export default App
