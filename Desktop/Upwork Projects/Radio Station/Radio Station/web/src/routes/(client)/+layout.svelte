<script>
</script>

<div class="hidden md:flex">
    <div class="row bg-gray-200 p-10 pr-4" style="width:100vw;height:100vh" >
        
        <div class="col-3 h-full">
            <div class="h-full rounded-lg bg-white">
                <p class="font-semibold pl-4 py-3 text-4xl">Croatia Radio</p>
                <div class="pl-8 side-list text-xl">
                    <p><a href="/">Home</a></p>
                    <p><a href="/genres">Genres</a></p>
                    <p><a href="/search">Search</a></p>
                    <p><a href="/news">News</a></p>
                    <p><a href="/popular">Popular Radio Stations</a></p>
                </div>
            </div>
        </div>
        <div class="col-9 h-full xs" >
            <div class="h-full bg-white rounded p-10 overflow-y-scroll">
                <slot></slot>
            </div>
        </div>
    </div>
</div>
<div class="md:hidden">
    <div class="row py-3 bg-gray-100 " style="overflow: hidden;" >
        <div class="col-6">
            <p class="ml-3 my-auto text-sm">Croatia Radio Station</p>
        </div>
        <div class="col-4">

        </div>
        <div class="col-2">
            <img alt="Menu Icon" src="/menu.png" width="20" class="float-right my-auto" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" />
        </div>      
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <p class="text-lg">Croatia Radio Station</p>
            </div>
            <div class="offcanvas-body">
                <div class="side-list text-xl">
                    <p data-bs-dismiss="offcanvas" aria-label="Close"><a  href="/">Home</a></p>
                    <p data-bs-dismiss="offcanvas" aria-label="Close" ><a  href="/genres">Genres</a></p>
                    <p data-bs-dismiss="offcanvas" aria-label="Close" ><a  href="/search">Search</a></p>
                    <p data-bs-dismiss="offcanvas" aria-label="Close" ><a  href="/news">News</a></p>
                    <p data-bs-dismiss="offcanvas" aria-label="Close" ><a  href="/popular">Popular Radio Stations</a></p>
                    <p class="float-right text-black text-md" data-bs-dismiss="offcanvas" aria-label="Close">Close Menu</p>
                </div>
            </div>
        </div>
    </div>

    <div class="px-4 mt-10 h-full overflow-auto py-4" >
        <slot></slot>
    </div>

</div>