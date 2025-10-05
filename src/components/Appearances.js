import React from 'react'

export default function Appearances() {
  return (
    <section className="bg-white px-2" id="appearances">
      <div className="container mx-auto max-w-7xl flex flex-wrap pt-12">
        <h3 className="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800">
          Appearances
        </h3>
        <div className="w-full mb-12">
          <div className="h-1 mx-auto wedding-blue-bg w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex w-full justify-around flex-wrap">
        </div>
       <div className="flex w-full justify-around flex-wrap gap-6 px-8">
        <iframe title='frontend.fm podcast' style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/episode/17fCQ2SPSVT3cnzXUgyJRl/video?utm_source=generator" width="575" height="323" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <iframe title='Beyond Barriers podcast' style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/episode/2RTCca0OH7G1tcWaHJJx8G/video?utm_source=generator" width="575" height="323" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <a href="https://www.newline.co/courses/the-approachable-guide-to-accessible-components" target="_blank" rel="noreferrer"> 
            <img src="https://raw.githubusercontent.com/Cool-Runningz/Cool-Runningz/main/images/course-thumbnail.webp" alt="'The Approachable Guide to Accessible Components' course" height="auto" width="575px" style={{borderRadius: '12px'}} />
        </a>
        <iframe style={{borderRadius: '12px'}} width="575" height="323" src="https://www.youtube-nocookie.com/embed/zvOIPBI2JlI?si=eau5Ix4OVNXnPpG-" title="Stacks Interview on ToolFinder" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <iframe title="Culture In Between podcast" className="md:h-[300px] h-[80px]" style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/episode/3NjkCIotOb9VJ3bhYYcSWh?utm_source=generator" width="575" height="351" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      </div>
    </section>
  )
}
