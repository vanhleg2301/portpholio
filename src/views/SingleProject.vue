<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';
import projects from '../data/projects';

export default {
	name: 'Projects',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
		ProjectRelatedProjects,
	},
	data: () => {
		return {
      projects,
      relatedProject: {
				relatedProjectsHeading: 'Related Projects',
        relatedProjects: [...projects],
      },
		};
	},
  created() {
    const id = parseInt(this.$route.params.id);
    this.project = projects.find(p => p.id === id) || null;
  },
  computed: {
    singleProjectHeader() {
      return this.project?.singleProjectHeader || {};
    },
    projectImages() {
      return this.project?.projectImages || [];
    },
    projectInfo() {
      return this.project?.projectInfo || {};
    },
  },
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="singleProjectHeader" />

		<!-- Project gallery -->
		<ProjectGallery :projectImages="projectImages" />

		<!-- Project information -->
		<ProjectInfo :projectInfo="projectInfo" />

		<!-- Project related projects -->
		<ProjectRelatedProjects :relatedProject="relatedProject" />
	</div>
</template>

<style scoped></style>
