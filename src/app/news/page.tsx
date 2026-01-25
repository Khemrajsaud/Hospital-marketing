import React from 'react'
import LatestNews from '@/src/features/newsreport/component/latestnews/LatestNews'
import NewsGallery from '@/src/features/newsreport/component/newsgallery/NewsGallery'
import VideoGallery from '@/src/features/newsreport/component/videogallery/VideoGallery'
import News from '@/src/features/newsreport/component/news/News'

const page = () => {
  return (
    <div>
     <NewsGallery/>
     <LatestNews/>
     <VideoGallery/>
     <News/>
    </div>
  )
}

export default page
