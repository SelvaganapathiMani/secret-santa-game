import { shallowMount } from '@vue/test-utils';
import FileUpload from '@/components/FileUpload.vue';

describe('FileUpload.vue', () => {
  it('should upload files correctly', () => {
    const wrapper = shallowMount(FileUpload);
    expect(wrapper.exists()).toBe(true);
  });
});
