import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import RecipeCard from '../../components/RecipeCard'
import { Recipe } from '../../lib/Recipe'

export interface MenuProps {
  recipes: Recipe[]
  host: string
}

export default function Menu({ recipes }: MenuProps) {
  const sortRecipeFunction = (a, b) =>
    a.name < b.name ? -1 : a.name > b.name ? 1 : 0

  const [data, setData] = useState<Recipe[]>(recipes.sort(sortRecipeFunction))
  const oringalData: Recipe[] = recipes.sort(sortRecipeFunction)

  const [search, setSearch] = useState('')

  useEffect(() => {
    if (oringalData) {
      setData(
        oringalData.filter(
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
        <InputGroup>
          <InputLeftElement
            fontSize="1.5em"
            margin="1"
            children={<SearchIcon color="gray.400" />}
          />
          <Input
            placeholder="Recipe name or category"
            size="lg"
            value={search}
            onChange={handleChange}
          />
        </InputGroup>
      </div>
      <div className="col-12 m-0 p-0 row">
        {data && data.map((recipe) => <RecipeCard recipe={recipe} />)}
      </div>
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
      description: '',
      steps: [],
    },
    {
      name: 'Butter Chicken',
      category: 'Curry',
      difficulty: 4,
      ingredients: [],
      steps: [],
      description: '',
    },
    {
      name: 'Lamb Rogan Josh',
      category: 'Curry',
      difficulty: 5,
      steps: [],
      ingredients: [],
      description: '',
    },
    {
      name: 'Tagliatelle Trimalcione',
      category: 'Pasta',
      difficulty: 4,
      ingredients: [],
      steps: [],
      description: '',
    },
    {
      name: 'Spaghetti Alla Gamberi',
      category: 'Pasta',
      difficulty: 3,
      description: 'Spaghetti with king prawns in a cream and tomato sauce',
      ingredients: [],
      steps: [],
    },
    {
      name: 'Spaghetti All’Amatriciana',
      category: 'Pasta',
      difficulty: 2,
      ingredients: [],
      steps: [],
      description: '',
    },
    {
      name: 'Napoli',
      category: 'Pasta',
      ingredients: [],
      difficulty: 2,
      description: '',
      steps: [],
    },
    {
      name: 'Carbonara',
      category: 'Pasta',
      difficulty: 4,
      steps: [],
      ingredients: [],
      description: '',
    },
    {
      name: 'Meatball',
      category: 'Pasta',
      difficulty: 3,
      ingredients: [],
      steps: [],
      description: '',
    },
    {
      name: 'Mushroom Risotto',
      category: 'Risotto',
      difficulty: 2,
      ingredients: [],
      steps: [],
      description: '',
    },
    {
      name: 'Asparagus Risotto',
      category: 'Risotto',
      ingredients: [],
      difficulty: 2,
      steps: [],
      description: '',
    },
    {
      name: 'Beetroot Risotto',
      category: 'Risotto',
      ingredients: [],
      difficulty: 2,
      steps: [],
      description: '',
    },
    {
      name: 'Milanese',
      category: 'Risotto',
      ingredients: [],
      difficulty: 1,
      steps: [],
      description: '',
    },
    {
      name: 'Chow Mein',
      category: 'Noodle',
      ingredients: [],
      difficulty: 3,
      steps: [],
      description: '',
    },
    {
      name: 'Steak',
      category: 'Meat',
      ingredients: [],
      difficulty: 1,
      steps: [],
      description: '',
    },
    {
      name: 'Chicken',
      category: 'Meat',
      ingredients: [],
      difficulty: 2,
      steps: [],
      description: '',
    },
    {
      name: 'Saltimbocca',
      category: 'Meat',
      ingredients: [],
      difficulty: 5,
      steps: [],
      description: '',
    },
  ]

  return {
    props: { recipes: recipes },
    revalidate: 86400,
  }
}
