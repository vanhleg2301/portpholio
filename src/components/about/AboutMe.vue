<script>
export default {
  setup() {
    return {
      workExperience: [
        {
          title: 'Home Tuition Care',
          content: [
            "Develop website using Laravel and PHP, MySQL as database management system to ensure system performance and stability.",
            "<a href='https://bitbucket.org/giaophong/hometuitioncare/src/main/' target='_blank' rel='noopener noreferrer' style='color:blue; text-decoration: underline;'>Bitbucket</a>",
          ]
        },
        {
          title: 'Trader Academy',
          content: [
            "Design figma and develop website using Laravel 10 and PHP, using MySQL as database management system to ensure system performance and stability.",
            "<a href='https://www.figma.com/design/Qjksho8HEC2VB0yr3406q9/FTMONext?node-id=0-1&p=f&t=mZbR20mLT4N9pZSC-0' target='_blank' rel='noopener noreferrer' style='color:blue; text-decoration: underline;'>Figma</a>",
            "<a href='https://bitbucket.org/giaophong/traderacademy/src/main/' target='_blank' rel='noopener noreferrer' style='color:blue; text-decoration: underline;'>Bitbucket</a>",
          ]
        },
        {
          title: 'Job Linker',
          content: [
            "Design figma and develop website using Nodejs and javascript, using MySQL as database management system to ensure system performance and stability.",
            "<a href='https://www.figma.com/files/team/1417794608504435864/project/278628691/Team-project?fuid=1238295376683082793' target='_blank' rel='noopener noreferrer' style='color:blue; text-decoration: underline;'>Figma</a>",
            "<a href='https://gitlab.com/example/joblinker' target='_blank' rel='noopener noreferrer' style='color:blue; text-decoration: underline;'>Gitlab</a>",
          ]
        },
      ],
      skills: [
        "JavaScript, Vue.js, React",
        "Node.js, Express, REST APIs",
        "CSS, Tailwind, Responsive Design",
      ],
      education: [
        "FPT University | 2020-2024",
      ],
      languagesAndInterests: [
        "English - Professional Working Proficiency",
        "Pickleball, Badminton, Football, Singing",
      ],
    };
  },
};
</script>

<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <!-- Profile Image -->
    <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
      <img src="@/assets/images/Vanh.jpg" class="rounded-xl w-96" alt="Profile Image" />

      <div class="text-left space-y-10 mt-7">
        <!-- Skills -->
        <section>
          <h2 class="text-xl font-semibold mb-3 text-ternary-dark dark:text-ternary-light">
            Skills
          </h2>
          <ul class="list-disc list-inside text-lg text-ternary-dark dark:text-ternary-light">
            <li v-for="(item, index) in skills" :key="'skill-' + index">
              {{ item }}
            </li>
          </ul>
        </section>

        <!-- Languages & Interests -->
        <section>
          <h2 class="text-xl font-semibold mb-3 text-ternary-dark dark:text-ternary-light">
            Languages & Interests
          </h2>
          <ul class="list-disc list-inside text-lg text-ternary-dark dark:text-ternary-light">
            <li v-for="(item, index) in languagesAndInterests" :key="'lang-' + index">
              {{ item }}
            </li>
          </ul>
        </section>
      </div>


    </div>

    <!-- Details -->
    <div class="w-full sm:w-3/4 text-left space-y-10">
      <!-- Work Experience -->
      <section>
        <h2 class="text-xl font-semibold mb-3 text-ternary-dark dark:text-ternary-light">
          Work Experience
        </h2>
        <div v-for="(item, index) in workExperience" :key="'work-' + index" class="mb-6">
          <h3 class="font-semibold text-md mb-1">{{ item.title }}</h3>
          <ul class="list-disc list-inside text-ternary-dark dark:text-ternary-light text-base leading-relaxed">
            <li v-for="(line, idx) in item.content" :key="idx">
              <span v-html="line"></span>
            </li>
          </ul>
        </div>

      </section>

      <!-- Education -->
      <section>
        <h2 class="text-xl font-semibold mb-3 text-ternary-dark dark:text-ternary-light">
          Education
        </h2>
        <ul class="list-disc list-inside text-lg text-ternary-dark dark:text-ternary-light">
          <li v-for="(item, index) in education" :key="'edu-' + index">
            {{ item }}
          </li>
        </ul>
      </section>

    </div>
  </div>
</template>

