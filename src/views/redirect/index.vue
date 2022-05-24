<script setup>
  import { useRoute, useRouter } from "vue-router";
  const route = useRoute();
  const router = useRouter();
  const { params, query } = route;
  router.replace({ path: "/" + params.path, query });
  </script>
  <script>
  import { h } from 'vue'
  export default {
    render() {
      return h('template')
    }
  }
</script>