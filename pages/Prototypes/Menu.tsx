import { FaSearch } from 'react-icons/fa'
import React, { useEffect, useState } from 'react'
import RecipeCard from '../../components/Menu/RecipeCard'
import { Recipe } from '../../lib/Recipe'

export interface MenuProps {
  recipes: Recipe[]
  host: string
}

export default function Menu({ recipes }: MenuProps) {
  const sortRecipeFunction = (a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0)

  const [data, setData] = useState<Recipe[]>(recipes.sort(sortRecipeFunction))
  const originalData: Recipe[] = recipes.sort(sortRecipeFunction)

  const [search, setSearch] = useState('')

  useEffect(() => {
    if (originalData) {
      setData(
        originalData.filter(
          (item) =>
            item.name.toLowerCase().search(search.toLowerCase()) != -1 ||
            item.category.toLowerCase().search(search.toLowerCase()) != -1
        )
      )
    }
  }, [search])

  function handleChange(event) {
    setSearch(event.target.value)
  }

  return (
    <>
      <div className="col-12 p-md-2">
        <div style={{ position: 'relative' }}>
          <input
            placeholder="Recipe name or category"
            value={search}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.75rem', paddingRight: '2.5rem', fontSize: '1.125rem' }}
          />
          <FaSearch style={{ position: 'absolute', right: '0.5rem', top: '50%', transform: 'translateY(-50%)', fontSize: '1.5em', color: '#999' }} />
        </div>
      </div>
      <div className="col-12 m-0 p-0 row">{data && data.map((recipe) => <RecipeCard recipe={recipe} />)}</div>
    </>
  )
}

export async function getStaticProps() {
  const recipes: Recipe[] = [
    {
      name: 'Fajitas',
      category: 'Wrap',
      ingredients: [],
      difficulty: 3,
      description: "Chicken wrap, don't forget the guacamole and sour cream",
      steps: [],
    },
    {
      name: 'Butter Chicken',
      category: 'Curry',
      difficulty: 4,
      ingredients: [],
      steps: [],
      description: 'Chicken curry with a tomato and butter sauce, medium spice',
    },
    {
      name: 'Lamb Rogan Josh',
      category: 'Curry',
      difficulty: 5,
      steps: [],
      ingredients: [],
      description: 'Lamb curry with a spicy tomato sauce',
    },
    {
      name: 'Tagliatelle Trimalcione',
      category: 'Pasta',
      difficulty: 4,
      ingredients: [],
      steps: [],
      description: 'Tagliatelle with fennel sausage meat in a cream and tomato sauce',
    },
    {
      name: 'Spaghetti Gamberi',
      category: 'Pasta',
      difficulty: 3,
      description: 'Spaghetti with king prawns in a cream and tomato sauce',
      ingredients: [],
      steps: [],
    },
    {
      name: 'Pasta All’Amatriciana',
      category: 'Pasta',
      difficulty: 2,
      ingredients: [],
      steps: [],
      description: 'Pasta with pancetta, chilli and tomatoes',
    },
    {
      name: 'Penne All’ Arrabbiata',
      category: 'Pasta',
      ingredients: [],
      difficulty: 2,
      description: 'Pasta with chillies & tomatoes',
      steps: [],
    },
    {
      name: 'Spaghetti Carbonara',
      category: 'Pasta',
      difficulty: 4,
      steps: [],
      ingredients: [],
      description: 'Spaghetti with pancetta, cream & egg',
    },
    {
      name: 'Spaghetti Meatballs',
      category: 'Pasta',
      difficulty: 3,
      ingredients: [],
      steps: [],
      description: 'Spaghetti with meatballs in a tomato sauce',
    },
    {
      name: 'Mushroom Risotto',
      category: 'Risotto',
      difficulty: 2,
      ingredients: [],
      steps: [],
      description: 'Risotto made with a variety of different mushrooms',
    },
    {
      name: 'Asparagus Risotto',
      category: 'Risotto',
      ingredients: [],
      difficulty: 2,
      steps: [],
      description: 'Risotto with asparagus and parmesan, this can also be made with tenderstem broccoli',
    },
    {
      name: 'Beetroot Risotto',
      category: 'Risotto',
      ingredients: [],
      difficulty: 2,
      steps: [],
      description: 'Risotto with fresh beetroot and parmesan',
    },
    {
      name: 'Milanese',
      category: 'Risotto',
      ingredients: [],
      difficulty: 1,
      steps: [],
      description: 'A traditional risotto made with chicken stock and saffron',
    },
    {
      name: 'Chow Mein',
      category: 'Noodle',
      ingredients: [],
      difficulty: 3,
      steps: [],
      description: 'Noodles, meat and veg',
    },
    {
      name: 'Steak',
      category: 'Meat',
      ingredients: [],
      difficulty: 1,
      steps: [],
      description: 'Pan-fried Sirloin steak',
    },
    {
      name: 'Chicken',
      category: 'Meat',
      ingredients: [],
      difficulty: 2,
      steps: [],
      description: 'Oven roasted chicken',
    },
    {
      name: 'Saltimbocca',
      category: 'Meat',
      ingredients: [],
      difficulty: 5,
      steps: [],
      description: 'Chicken and parma ham with sage cooked in butter and white wine',
    },
  ]

  return {
    props: { recipes: recipes },
    revalidate: 86400,
  }
}
