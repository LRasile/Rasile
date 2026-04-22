import { useState } from 'react'
import { Recipe } from '../../lib/Recipe'

export interface RecipeCardProps {
  recipe: Recipe
}

export default function RecipeCard(props: RecipeCardProps) {
  const recipe = props.recipe
  const [isOpen, setIsOpen] = useState<Boolean>(false)

  function Difficulty({ difficulty }) {
    return (
      <span title="Difficulty" style={{ fontSize: '1.5rem' }}>
        {[...Array(difficulty)].map((_, i) => {
          return <span key={i}>🔪</span>
        })}
      </span>
    )
  }

  function Category({ category }) {
    return (
      <span title={category} style={{ fontSize: '1.5rem' }}>
        {category == 'Pasta' && <span>🍝</span>}
        {category == 'Risotto' && <span>🍚</span>}
        {category == 'Curry' && <span>🍛</span>}
        {category == 'Noodle' && <span>🍜</span>}
        {category == 'Wrap' && <span>🌯</span>}
        {category == 'Meat' && <span>🍖</span>}
        &nbsp;{category}
      </span>
    )
  }

  function RecipeContent(_props) {
    return (
      <div className="col-12" style={{ fontSize: '1' }}>
        Content
      </div>
    )
  }

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="col-12 row"
        style={{
          margin: 5,
          padding: 10,
          paddingBottom: 15,
          background: 'rgba(150, 150, 150, 0.1)',
          borderRadius: 10,
          cursor: 'pointer',
        }}
      >
        <div
          className="col-sm-6"
          style={{
            textTransform: 'capitalize',
            fontSize: '1.5rem',
            fontWeight: 'bold',
          }}
        >
          {recipe.name}
        </div>
        <div className="col-sm-3">
          <Difficulty difficulty={recipe.difficulty} />
        </div>
        <div className="col-sm-3">
          <Category category={recipe.category} />
        </div>
        <div className="col-12">{recipe.description}</div>
        <div className="row col-12" style={{ height: isOpen ? 'auto' : 0 }}>
          {isOpen && <RecipeContent recipe={recipe}></RecipeContent>}
        </div>
      </div>
    </>
  )
}
