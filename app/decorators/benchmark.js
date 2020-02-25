export default function benchmark(annotation) {
  return function(target, property, descriptor) {
    let original = descriptor.value;
    descriptor.value = async function() {
      let start = performance.now();
      let result = await original.apply(this, ...arguments);
      let end = performance.now();
      // eslint-disable-next-line no-console
      console.info(`⏱ ${end - start}ms: ${annotation}`);
      return result;
    };
  }
}
