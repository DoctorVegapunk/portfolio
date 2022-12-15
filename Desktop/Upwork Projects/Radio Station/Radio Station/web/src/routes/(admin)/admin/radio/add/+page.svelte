<script>
    let loading = false
	import Stationbox from "../../../../../components/major/stationbox.svelte";
    let stations = []
    let stationCodes = [
        "SK","EC","NZ","PL","IT","FI","RU","CN","DZ","GE","BE","GR","BB","DE","AT","AU","BA","TR","NL","AR","CA","GB","MX","BR","US","RO","FR","IR","EG","CY","DK","CH","BF","AF","ZM","AE","AL","WF","ES","AO","AM","PA","HR","PY","CZ","BG","SZ","LT","ZA","HU","YT","UG","VU","UY","VN","AQ","PH","SV","BZ","YE","CL","CR","AZ","VA","AD","PE","ID","ZW","EE","TH","VI","IE","IN","GT","UA","PT","SE","CO","LV","BD","SD","TW","FJ","NG","NO","IS","TC","MT","MY","IL","LB","XK","SG","HN","PR","UZ","RS","VE","GH","NI","KE","AW","BH","CU","CD","ET","SA","MA","QA","SY","KW","OM","PK","BY","IM","DO","JM","JP","ME","MK","AG","HK","KH","MD","PM","KR","SI","TJ","BO","SL","AS","RW","NP","GG","BT","LK","MN","GI","BQ","TZ","GD","PS","KZ","BJ","LC","GF","UM","KG","TN","TF","MG","SN","IQ","NA","GL","CW","BM","BW","MM","LU","CM","GN","DM","FK","GS","BS","GP","LY","BI","PF","MC","GY","TT","JO","SO","MW","MQ","RE","HT","FO","BN","GU","es","MZ","CK","MU","KP","VC","SR","NC","NF","JE","KM","CI","GW","LI","CG","MO","TG","CF","TM","SM","SC","ST","TO","CV","SH","IO","CC","KN","KY"
    ]
    let regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
    const changeCountry = async(e) => {
        loading = true
        const countryCode = stationCodes[parseInt(e.target.selectedOptions[0].value)]
        const test = fetch(`https://de1.api.radio-browser.info/json/stations/bycountrycodeexact/${countryCode}`)
        .then(response => response.json())
        .then(json => json)
        test.then(stationsData=>{
            const stationsTemp = []
            stationsData.forEach((station)=>{
                stationsTemp.push({
                    ...station,
                    country:regionNames.of(countryCode),
                    genre:station.tags[0]
                })
            })
            stations = stationsTemp

        
            loading = false
        })

        
        
    }

</script>
<svelte:head>
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
</svelte:head>
<main>
    <div class="w-11/12 mx-auto">
        <p>Select a country to get radio stations from.</p>
            
        <select class="form-select" aria-label="Default select example" style="width:fit-content" on:change={changeCountry}>
            <option selected>No country</option>
            {#each stationCodes as code,i}
                <option value={i}>{regionNames.of(code)}</option>
            {/each}
        </select>
    <div class="mt-5">
        {#if !stations[0]}
            {#if !loading}
                <p>No Country selected.</p>
            {:else}
                <p>Loading...</p>
            {/if}
        {:else}
            
            <div class="grid grid-cols-3 mt-20">
                {#each stations as station,i}
                    <Stationbox station={station} index={i}/>
                {/each}
            </div>
        {/if}
    </div>
    
    </div>

</main>