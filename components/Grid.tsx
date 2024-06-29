import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

const Grid = ({
    sectionId,
    title,
    gridItems,
} : {
    sectionId: string;
    title: string;
    gridItems: any[];
}) => {
  return (
    <section id={sectionId} className="">
        <h2 className="relative dark:text-white text-4xl text-center pt-10 pb-10">{title}</h2>
        <BentoGrid>
            {gridItems.map(
                (item, i) => (
                    <BentoGridItem
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        description={item.description}
                    />
                ))
            }
        </BentoGrid>
    </section>
  )
}

export default Grid