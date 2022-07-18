<script>
import { useRoute, useRouter } from 'vue-router';
import { h } from 'vue';
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const { params, query } = route;
    router.replace({ path: '/' + params.path, query });
    return () => h('template');
  }
};
</script>
