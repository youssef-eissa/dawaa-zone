import { prisma } from '../../../../../../lib/prisma'
import CategoriesSlider from './CategoriesSlider'

type props={
    locale:string
}

async function Categories({locale}:props) {
    const categories= await prisma.product.findMany({
        select: {
            categoryAr: true,
            categoryEn: true
        }
    })
    
    const categoriesSet=new Set(categories.map((category) => locale==="ar"?category.categoryAr:category.categoryEn))

  return <CategoriesSlider categoriesSet={[...categoriesSet]} />
}

export default Categories