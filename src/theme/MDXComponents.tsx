import MDXComponents from '@theme-original/MDXComponents';
import Screenshot from '@site/src/components/Screenshot';

/**
 * Components every guide can use without an import line, so a page's source
 * stays readable to someone editing copy.
 */
export default {
  ...MDXComponents,
  Screenshot,
};
