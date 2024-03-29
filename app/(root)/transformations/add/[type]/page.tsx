import Header from '@/components/shared/Header'
import { transformationTypes } from '@/constants'
import {auth} from '@clerk/nextjs'
import TransformationForm from '@/components/shared/TransformationForm';
import { getUserById } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';

const AddTransformationTypePage = async ({params : {type} }: SearchParamProps) => {
  const {userId} = auth()
  if(!userId) redirect('/sing-in')
  const user = await getUserById(userId)
  const transformation = transformationTypes[type];
  return (
    <>
      <Header title={transformation.title} subtitle = {transformation.subTitle}/>

      <TransformationForm
      action = "Add" userId={user._id} type = {transformation.type as TransformationTypeKey} creditBalance={user.creditBalance}/>
    </>
    
  )
}

export default AddTransformationTypePage