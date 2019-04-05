        var t = 1;
        const objCha =  document.querySelector('.menu-ne');
        const objCon = document.querySelectorAll('.menu-ne li');

        // TODO : Hiệu ứng trượt slide quảng cáo trên đầu : slide vòng
        function next(){
            if(t >= objCon.length - 1) return;
            objCha.style.transition = "transform 0.4s";
            t++;
            objCha.style.transform = 'translateX(' + (-t * 980) + 'px)';

                /* ! không làm được như này vì không đồng nhất được đơn vị*/ 
            // var kc = document.querySelector('.slide-container').style.marginLeft;
            // kc = kc + 980;
            // document.querySelector('.slide-container').style.marginLeft = kc + "px";
        }

        // console.log(objCha);

        const actionPrev = document.querySelector('#prev-slide');
        actionPrev.addEventListener('click', ()=>{
            if(t <= 0) return;
            objCha.style.transition = "transform 0.4s";
            t--;
            objCha.style.transform = 'translateX(' + (-t * 980) + 'px)';
        });

        objCha.addEventListener('transitionend', ()=>{
            if(objCon[t].id === 'lastClone'){
                console.log(t + " last");
                objCha.style.transition = "transform 0s";
                t = objCon.length - 2;
                objCha.style.transform = 'translateX(' + (-t * 980) + 'px)';
            }
            if(objCon[t].id === 'firstClone'){
                console.log(t + " first");
                objCha.style.transition = "transform 0s";
                t = objCon.length - t;
                objCha.style.transform = 'translateX(' + (-t * 980) + 'px)';
            }
        });
        
        // TODO : Hiệu ứng trượt slide chọn phim
        const spaceMovie = 246;
        var dem = 0;
        const movieCha = document.querySelector('.slide-movie');
        const movieCon = document.querySelectorAll('.slide-movie li');

        function next_movie(){
            if(dem >= movieCon.length - 3){
                return;
            }
            movieCha.style.transition = 'transform 1s';
            dem++;
            if(dem >= 3)
                document.querySelector('#next-movie').style.display = 'none';
            document.querySelector('#prev-movie').style.transform = 'none';
            document.querySelector('#prev-movie').style.display = 'block';
            movieCha.style.transform = 'translateX(' + (-dem * 246) + 'px)';
            console.log(dem);
        }
        function prev_movie(){
            if(dem <= 0){
                return;
            }
            movieCha.style.transition = 'transform 1s';
            dem--;
            if(dem <= 0)
                document.querySelector('#prev-movie').style.display = 'none';
            document.querySelector('#next-movie').style.transform = 'none';            
            document.querySelector('#next-movie').style.display = 'block';
            movieCha.style.transform = 'translateX(' + (-dem * 246) + 'px)';
        }

        // TODO : Hiệu ứng trượt slide quảng cáo : kế thừa từ hiệu ứng trên
        const spaceAbv = 247;
        var dem1 = 0;
        const abvCha = document.querySelector('.abv-content');
        const abvCon = document.querySelectorAll('.abv-content li');

        function next_abv(){
            if(dem1 >= abvCon.length - 1){
                return;
            }
            abvCha.style.transition = 'transform 1s';
            dem1++;
            if(dem1 >= 1)
                document.querySelector('#next-adv').style.display = 'none';
            document.querySelector('#prev-adv').style.transform = 'none';
            document.querySelector('#prev-adv').style.display = 'block';
            abvCha.style.transform = 'translateX(' + (-dem1 * spaceAbv) + 'px)';
            console.log(dem1);
        }
        function prev_abv(){
            if(dem1 <= 0){
                return;
            }
            abvCha.style.transition = 'transform 1s';
            dem1--;
            if(dem1 <= 0)
                document.querySelector('#prev-adv').style.display = 'none';
            document.querySelector('#next-adv').style.transform = 'none';            
            document.querySelector('#next-adv').style.display = 'block';
            abvCha.style.transform = 'translateX(' + (-dem1 * spaceAbv) + 'px)';
        }
