<script lang="ts">
	import { Handle, Position, type NodeProps, type XYPosition } from '@xyflow/svelte';

	type $$Props = NodeProps;

	export let data: { label: string } = { label: 'Node' };
	export let positionAbsolute: XYPosition = { x: 0, y: 0 };
</script>

<div class="custom">
	<div>{data.label}</div>
	<div>{~~positionAbsolute.x}, {~~positionAbsolute.y}</div>

	<Handle type="target" position={Position.Top} />

	<Handle type="source" position={Position.Bottom} style="left: 10%;" id="a" />
	<Handle type="source" position={Position.Bottom} id="b" />
	<Handle type="source" position={Position.Bottom} style="left: 90%;" id="c" />
</div>

<style>
	.custom {
		background: #ffcc00;
		padding: 10px;
	}
</style>
