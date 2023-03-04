<template>
  <div class="fancy-text-block-three">
    <div class="container">
      <div class="row">
        <div class="col-xl-11 m-auto">
          <div class="row g-0">

            <div v-for="item in text_block_data" :key="item.id" class="col-lg-6">
              <div :class="`feature-content ${item.bg}`">
                <div class="header" data-aos="fade-up" data-aos-duration="1200">
                  <h3>{{item.title}}</h3>
                  <p class="font-rubik">{{item.subtitle}}</p>
                </div> <!-- /.header -->

                <div v-for="(listItem,index) in item.featureItems" :key="index" class="feature-list d-flex" data-aos="fade-up" data-aos-duration="1200" :data-aos-delay="listItem.delay">
                  <div class="icon-box d-flex align-items-center justify-content-center">
                    <img :src="listItem.icon" alt=""></div>
                  <div class="text-meta">
                    <h4>{{listItem.list_title}}</h4>
                    <p>{{listItem.list_subtitle}}</p>
                  </div> <!-- /.text-meta -->
                </div>
                 <!-- /.feature-list --> 
              </div> <!-- /.feature-content -->
            </div>

        
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xl-10 m-auto" data-aos="fade-up" data-aos-duration="1200">
          <p class="font-rubik slogan">We break down barriers so teams can focus on what matters working together to create products their customers love.</p>
        </div>
      </div>
    </div>
    <div class="bubble-one"></div>
    <div class="bubble-two"></div>
    <div class="bubble-three"></div>
    <div class="bubble-four"></div>
  </div>
</template>

<script>
export default {
  name: 'TextBlockThree',
  data () {
    return {
      text_block_data : [
        {id:1,bg:'light-bg',title:'Individual',subtitle:'Wzprenr Investor Network is a global community that extends the reach of leading',featureItems:[
          {
          delay:'100',
          icon:require(`@/assets/images/icon/07.svg`),
          list_title:'Time well spent',
          list_subtitle:'Facilitates access to capital entrepreneurs through road show preparation.',
        },
          {
          delay:'200',
          icon:require(`@/assets/images/icon/08.svg`),
          list_title:'Quietly powerful',
          list_subtitle:'We break down barriers so teams can focus on what matters working together to create products their customers love.',
        },
        ]},

        {id:2,bg:'dark-bg',title:'Big Company',subtitle:'Wzprenr Investor Network is a global community that extends the reach of leading',featureItems:[
          {
          delay:'100',
          icon:require(`@/assets/images/icon/07.svg`),
          list_title:'Make your work easy',
          list_subtitle:'Remove the fog. We don’t want to be another task to complete or a tool to decipher.',
        },
          {
          delay:'200',
          icon:require(`@/assets/images/icon/08.svg`),
          list_title:'Build together',
          list_subtitle:'Software is made better together. From task completion to product launch, we celebrate team wins big and small.',
        },
        ]}
      ]
    }
  }
}
</script>