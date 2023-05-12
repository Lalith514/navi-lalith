function navilalith(options) {
    let colors = document.querySelectorAll('.navilalith');

    if(options.color_type === 'greenpink')
       options.color_type = 'linear-gradient(to bottom, #00ff00 0%, #ff0066 100%)'
    else
    options.color_type  ='white'

    if(options.color_type === 'greenaqua')
       options.color_type = 'linear-gradient(to bottom, #00ff00 0%, #00ffff 100%)'
    else
    options.color_type  ='white'

    if(options.color_type === 'greenyellow')
       options.color_type = 'linear-gradient(to bottom, #66ff33 0%, #ffff66 100%)'
    else
    options.color_type  ='white'

    if(options.color_type === 'greenorange')
       options.color_type = 'linear-gradient(to bottom, #66ff66 0%, #ff6600 100%)'
    else
    options.color_type  ='white'

    

    
           
}
module.exports.navilalith = navilalith;