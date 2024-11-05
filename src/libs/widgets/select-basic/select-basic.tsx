import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
export interface SelectBasicProps {

}

const SelectBasic: React.FC<SelectBasicProps> = () => {
    return (
        <Select
            color="primary"
            placeholder="Choose one…"
            size="sm"
            variant="soft"
        >
            <Option value="dog">Dog</Option>
            <Option value="cat">Cat</Option>
        </Select>
    );
}

export default SelectBasic;