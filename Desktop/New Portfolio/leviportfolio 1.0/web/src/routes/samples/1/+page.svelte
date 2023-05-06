<script>
    const pageData =  {
        gallery:[
            "https://firebasestorage.googleapis.com/v0/b/levithewebsitebuilder.appspot.com/o/Samples%20Images%2FCentogene%2F1.webp?alt=media&token=2b1a7d1a-e92f-4d4e-9f22-21e3b3659a60",
            "https://firebasestorage.googleapis.com/v0/b/levithewebsitebuilder.appspot.com/o/Samples%20Images%2FCentogene%2F2.webp?alt=media&token=1bec353f-4281-47aa-8879-d14a0048a7df",
            "https://firebasestorage.googleapis.com/v0/b/levithewebsitebuilder.appspot.com/o/Samples%20Images%2FCentogene%2F3.webp?alt=media&token=66c2eb7f-149f-4153-bc51-bf8a70aa0ded",
            "https://firebasestorage.googleapis.com/v0/b/levithewebsitebuilder.appspot.com/o/Samples%20Images%2FCentogene%2F4.webp?alt=media&token=84b4dd43-fed0-4316-87ca-c4b02b3ed18e",
            "https://firebasestorage.googleapis.com/v0/b/levithewebsitebuilder.appspot.com/o/Samples%20Images%2FCentogene%2F5.webp?alt=media&token=ce52876b-6306-449b-8e7f-803b88c74b66"
        ],
        tags:['React','Tailwind CSS','Svelt','HTML','CSS','JavaScript','Three.js','Responsive Design'],
        name:"Centogene Solutions",
        role:"Front-End Developer",
        desc:"I worked on designing transitions and the navbar on the page."

    }
</script>

<div class="fixed [&>div>a>div>img]:w-6 z-50 right-4 [&>div]:my-7 [&>div]:opacity-80">
    <div class="text-center text-sm text-white hover:scale-125 transition-all ease-in-out duration-200">
        <a href="/">
            <div class="p-3 bg-gray-500 rounded-full w-fit mx-auto">
                <img alt="Home Icon" src="https://firebasestorage.googleapis.com/v0/b/levithewebsitebuilder.appspot.com/o/Navigation%20Icons%2Fhome.svg?alt=media&token=c63073d4-8e31-4781-841d-d4bee43b1c99"/>    
            </div>
        </a>
    </div>
    <div class="text-center text-sm text-white hover:scale-125 transition-all ease-in-out duration-200">
        <a href="/work">
            <div class="p-3 bg-gray-500 rounded-full w-fit mx-auto">
                <img alt="Work Experience Icon" src="https://firebasestorage.googleapis.com/v0/b/levithewebsitebuilder.appspot.com/o/Navigation%20Icons%2Fwork_experience.svg?alt=media&token=d46edb46-0937-4736-b4fa-39e57befaf88"/>    
            </div>
        </a>
    </div>
    <div class="text-center text-sm text-white hover:scale-125 transition-all ease-in-out duration-200">
        <a href="/samples/1">
            <div class="p-3 bg-gray-500 rounded-full w-fit mx-auto">
                <img alt="Samples Icon" src="https://firebasestorage.googleapis.com/v0/b/levithewebsitebuilder.appspot.com/o/Navigation%20Icons%2Fsamples.svg?alt=media&token=3198e26a-2172-432d-8fcc-ed4ed619d18a"/>    
            </div>
        </a>
    </div>
</div>
<div class="min-h-screen py-4 bg-gray-900">
    <div>
        <div id="carouselIndicator" class="carousel slide">
            <div class="carousel-indicators">
                {#each pageData.gallery as sampleImage,i}
                    <button type="button" data-bs-target="#carouselIndicator" data-bs-slide-to={i} aria-label={`Slide ${i}`} class:active={i === 0} aria-current={i === 0}></button>
                {/each}
            </div>
            <div class="carousel-inner [&>div>img]:md:h-72 [&>div>img]:mx-auto [&>div>img]:my-10">
                {#each pageData.gallery as sampleImage,i}
                
                    <div class="carousel-item" class:active={i === 0} >
                        <img src={sampleImage} class="d-block" alt="Sample">
                    </div>
                {/each}
        
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselIndicator" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselIndicator" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
        </div>

        <div class="text-white text-center py-3 m-10 align-bottom border-2 border-white rounded-lg">
            <p class="font-raleway text-3xl py-1">{pageData.name}</p>
            <p class="font-questrial text-lg mb-3">Role:{pageData.role}</p>
            <div class="mx-10">
                <div class="flex flex-wrap">
                    {#each pageData.tags as tag}
                        <div class="p-1 px-3 border border-white rounded-full m-2">
                            <p class="font-questrial">{tag}</p>
                        </div>
                    {/each}
                </div>
                <p class="text-left my-4 font-montserrat ml-2">{pageData.desc}</p>
                <div class="flex justify-center [&>s]:mx-4">
                    <a href="/samples/2">
                        <button class="bg-white hover:!bg-black hover:!text-white hover:scale-125 transition-all duration-150 text-black font-semibold font-montserrat py-2 px-3 rounded">
                            Next
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
