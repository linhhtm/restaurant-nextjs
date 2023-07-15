import React from 'react'
import { MotionDiv } from 'helpers'
import { IRecipe } from 'types'
import Link from 'next/link'
import HeartIcon from 'feather-icons/dist/icons/heart.svg'
import { updateFavoriteList } from 'store/slice/recipe.slice'
import clsx from 'clsx'
import { useAppDispatch } from 'store/hook'

const CardContainer = `mb-5 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`
const Card = `relative bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`
const CardImageContainer = `h-56 xl:h-64 bg-center bg-cover rounded-t`
const CardHeartContainer = `cursor-pointer leading-none absolute inline-flex bg-gray-100 top-[20px] left-0 ml-4 mb-4 rounded-full px-1 py-1 items-end`
const CardHeart = `text-sm font-bold flex items-end`

const CardText = `cursor-pointer p-4 text-gray-900`
const CardTitle = `text-lg font-semibold group-hover:text-primary-500`
const CardContent = `mt-1 text-sm font-medium text-gray-600 line-clamp-3`

const CardRecipe = ({ data }: Record<string, any>) => {
  const dispatch = useAppDispatch()
  const toFavoriteList = (item: IRecipe) => {
    dispatch(updateFavoriteList(item))
  }
  console.log(data)
  return (
    <div className={CardContainer}>
      <MotionDiv
        className={`${Card} group`}
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <div
          className={CardImageContainer}
          style={{ backgroundImage: `url("${data.strMealThumb}")` }}
        ></div>
        <div className={CardHeartContainer}>
          <div
            className={CardHeart}
            onClick={() => toFavoriteList(data)}
          >
            <HeartIcon
              className={clsx('w-6 h-6 fill-current', {
                'text-red-600': data.liked,
                'text-gray-400': !data.liked
              })}
            />
          </div>
        </div>
        <Link href={`recipes/${data.idMeal}`}>
          <div className={CardText}>
            <h5 className={CardTitle}>{data.strMeal}</h5>
            <p className={CardContent}>{data.strInstructions}</p>
          </div>
        </Link>
      </MotionDiv>
    </div>
  )
}

export default CardRecipe
