import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const FoodForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.food?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        <TextField
          name="name"
          defaultValue={props.food?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="name" className="rw-field-error" />

        <Label
          name="imgurl"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Imgurl
        </Label>
        <TextField
          name="imgurl"
          defaultValue={props.food?.imgurl}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="imgurl" className="rw-field-error" />

        <Label
          name="stock"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Stock
        </Label>
        <NumberField
          name="stock"
          defaultValue={props.food?.stock}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="stock" className="rw-field-error" />

        <Label
          name="packSize"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Pack size
        </Label>
        <NumberField
          name="packSize"
          defaultValue={props.food?.packSize}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="packSize" className="rw-field-error" />

        <Label
          name="servingSize"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Serving size
        </Label>
        <NumberField
          name="servingSize"
          defaultValue={props.food?.servingSize}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="servingSize" className="rw-field-error" />

        <Label
          name="calories"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Calories
        </Label>
        <TextField
          name="calories"
          defaultValue={props.food?.calories}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
          transformValue="Float"
        />
        <FieldError name="calories" className="rw-field-error" />

        <Label
          name="totalFat"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Total fat
        </Label>
        <TextField
          name="totalFat"
          defaultValue={props.food?.totalFat}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
          transformValue="Float"
        />
        <FieldError name="totalFat" className="rw-field-error" />

        <Label
          name="sodium"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Sodium
        </Label>
        <TextField
          name="sodium"
          defaultValue={props.food?.sodium}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
          transformValue="Float"
        />
        <FieldError name="sodium" className="rw-field-error" />

        <Label
          name="protein"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Protein
        </Label>
        <TextField
          name="protein"
          defaultValue={props.food?.protein}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
          transformValue="Float"
        />
        <FieldError name="protein" className="rw-field-error" />

        <Label
          name="carbs"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Carbs
        </Label>
        <TextField
          name="carbs"
          defaultValue={props.food?.carbs}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
          transformValue="Float"
        />
        <FieldError name="carbs" className="rw-field-error" />

        <Label
          name="price"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Price
        </Label>
        <TextField
          name="price"
          defaultValue={props.food?.price}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
          transformValue="Float"
        />
        <FieldError name="price" className="rw-field-error" />

        <Label
          name="category"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Category
        </Label>
        <TextField
          name="category"
          defaultValue={props.food?.category}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="category" className="rw-field-error" />

        <Label
          name="regular"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Regular
        </Label>
        <CheckboxField
          name="regular"
          defaultChecked={props.food?.regular}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="regular" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default FoodForm
