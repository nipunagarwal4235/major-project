import React from 'react'

const Header = () => {
  return (
    <> 
     
        <div className="flex items-center justify-between py-5 md:block">
            <a href="javascript:void(0)">
                <img
                    src="https://aniportalimages.s3.amazonaws.com/media/details/BML_Munjal_University2022070710280920220707104023.jpg"
                    width={120}
                    height={50}
                    alt="BML logo"
                />
            </a>

        </div>
    
        <div className='relative'>
            <div className='absolute inset-0 blur-xl h-[580px]' style={{ background: "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)" }}></div>
            <div className='relative'>
                
                <section>
                    <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
                        <div className='flex-none space-y-5 max-w-xl'>
                            
                            <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl">
                            Recruitment
                            </h1>
                            
                            <div className='flex items-center gap-x-3 sm:text-sm'>
                                
                                
                            </div>
                        </div>
                        <div className='flex-1 hidden md:block'>
                        
<div
  style={{ backgroundImage:"url(" + "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVjcnVpdG1lbnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
    
  }}>
</div>
                            {/* <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVjcnVpdG1lbnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="max-w-xl" /> */}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    

    </>
    
  )
  
}

export default Header