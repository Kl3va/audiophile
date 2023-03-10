//import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux/es/exports";

import { TypedUseSelectorHook } from 'react-redux/es/types'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import type { RootState, AppDispatch } from './store'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
