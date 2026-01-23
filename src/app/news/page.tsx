import React from 'react'
import LatestNews from '@/src/features/newsreport/component/LatestNews'
import NewsGallery from '@/src/features/newsreport/component/NewsGallery'
import VideoGallery from '@/src/features/newsreport/component/VideoGallery'

const page = () => {
  return (
    <div>
     <NewsGallery/>
     <LatestNews/>
     <VideoGallery/>
    </div>
  )
}

export default page
