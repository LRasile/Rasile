import React from 'react'
import { Recipe } from '../lib/Recipe'

export interface RecipeCardProps {
  recipe: Recipe
}

export default function RecipeCard(props: RecipeCardProps) {
  const recipe = props.recipe

  function Difficulty({ difficulty }): JSX.Element {
    return (
      <span title="Difficulty" style={{ fontSize: '1.5rem' }}>
        {[...Array(difficulty)].map(() => {
          return <span>🔪</span>
        })}
      </span>
    )
  }

  function Category({ category }): JSX.Element {
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

  return (
    <>
      <div
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
          className="col-6"
          style={{
            textTransform: 'capitalize',
            fontSize: '1.5rem',
            fontWeight: 'bold',
          }}
        >
          {recipe.name}
        </div>
        <div className="col-3">
          <Difficulty difficulty={recipe.difficulty} />
        </div>
        <div className="col-3">
          <Category category={recipe.category} />
        </div>
        <div className="col-12">{recipe.description}</div>
      </div>
    </>
  )
}
