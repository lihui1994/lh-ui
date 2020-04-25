<template>
	<div class="row">
		<div class="row">
			<lh-progress :percentage="50"></lh-progress>
		</div>
		<div class="row">
			<lh-progress :percentage="100" :format="format"></lh-progress>
		</div>
		<div class="row">
			<lh-progress :percentage="100" status="success"></lh-progress>
		</div>
		<div class="row">
			<lh-progress :percentage="100" status="warning"></lh-progress>
		</div>
		<div class="row">
			<lh-progress :percentage="50" status="exception"></lh-progress>
		</div>	
		<lh-progress type="circle" :percentage="0"></lh-progress>
		<lh-progress type="circle" :percentage="25"></lh-progress>
		<lh-progress type="circle" :percentage="100" status="success"></lh-progress>
		<lh-progress type="circle" :percentage="70" status="warning"></lh-progress>
		<!-- <lh-progress type="circle" :percentage="50" status="exception"></lh-progress> -->
	</div>
</template>

<script>

    import LhProgress from '../../packages/progress';

    export default {
        name: 'testProgress',
				components: { LhProgress },
				methods: {
					format(percentage) {
						return percentage === 100 ? '满' : `${percentage}%`;
					}
    		}
    }
</script>

<style lang="scss" scoped>
	.row{
		// display: flex;
		margin-top: 20px;
	}
	.col{
		margin-left: 20px;
	}
</style>