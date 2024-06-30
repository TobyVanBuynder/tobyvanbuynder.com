import React from 'react'
import { IRecentProject, recentProjects } from '@/data'
import { Button } from './ui/Button'
import { getIconByName } from '@/utils/getIconByName'
import { AnimatedTooltip, IAnimatedTooltipProps } from './ui/AnimatedTooltip'

const RecentProjects = () => {
  return (
    <section className="py-20 relative" id="recent-projects">
        <h2 className="heading">Recent Projects</h2>
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
            {recentProjects.map(({id, description, title, techIcons}: IRecentProject) => (
                <div key={id} className="lg:min-h-[32.5rem] h-[25rem] flex flex-col items-center justify-center sm:w-96 w-90">
                    <h2 className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 text-2xl">{title}</h2>
                    <p>{description}</p>
                    
                    <div className="flex w-full gap-2 pt-2 pb-4">
                        <AnimatedTooltip items={
                            techIcons.map<IAnimatedTooltipProps>(
                                (iconName: string, index: number) => {
                                    return {
                                        id: index,
                                        text: iconName,
                                        itemToShow: getIconByName(iconName, index, {size: 32})
                                    }
                                })} />
                    </div>
                    <Button title={'Read More'} icon={undefined} position={'right'} />
                </div>
            ))}
        </div>
    </section>
  )
}

export default RecentProjects

