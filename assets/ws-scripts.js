var newTemplate = 
        `<div class="bold-ro__order-interval-container" {{^subscription_checked}} style="display:false;" {{/subscription_checked}}>
            <span class="bold-ro__order-interval-lbl">{{#translate}}order_interval_convertible{{/translate}}</span>
            <select class="bold-ro__order-interval">                
            <option data-frequency-type="1" data-frequency-num="25" data-frequency-type-text="Day(s)" value="1-25">
  25 Days
            </option>
            <option data-frequency-type="1" data-frequency-num="26" data-frequency-type-text="Days(s)" value="1-26">
  26 Days
            </option>
            <option data-frequency-type="1" data-frequency-num="27" data-frequency-type-text="Day(s)" value="1-27">
  27 Days
            </option>
            <option data-frequency-type="1" data-frequency-num="28" data-frequency-type-text="Day(s)" value="1-28"  selected="true">
  28 Days
            </option>
            <option data-frequency-type="1" data-frequency-num="29" data-frequency-type-text="Day(s)" value="1-29">
  29 Days
            </option>
            <option data-frequency-type="1" data-frequency-num="30" data-frequency-type-text="Day(s)" value="1-30">
  30 Days
            </option>
            <option data-frequency-type="1" data-frequency-num="31" data-frequency-type-text="Day(s)" value="1-31">
  31 Days
            </option>
            <option data-frequency-type="1" data-frequency-num="32" data-frequency-type-text="Day(s)" value="1-32">
  32 Days
            </option>
            <option data-frequency-type="1" data-frequency-num="33" data-frequency-type-text="Day(s)" value="1-33">
  33 Days
            </option>
            <option data-frequency-type="1" data-frequency-num="34" data-frequency-type-text="Day(s)" value="1-34">
  34 Days
            </option>
            <option data-frequency-type="1" data-frequency-num="35" data-frequency-type-text="Day(s)" value="1-35">
  35 Days
            </option>
            <option data-frequency-type="1" data-frequency-num="36" data-frequency-type-text="Day(s)" value="1-36">
  36 Days
            </option>
            <option data-frequency-type="1" data-frequency-num="37" data-frequency-type-text="Day(s)" value="1-37">
  37 Days
            </option>
            <option data-frequency-type="1" data-frequency-num="38" data-frequency-type-text="Day(s)" value="1-38">
  38 Days
            </option>
            <option data-frequency-type="1" data-frequency-num="39" data-frequency-type-text="Day(s)" value="1-39">
  39 Days
            </option>
            <option data-frequency-type="1" data-frequency-num="40" data-frequency-type-text="Day(s)" value="1-40">
  40 Days
            </option>
            <option data-frequency-type="1" data-frequency-num="41" data-frequency-type-text="Day(s)" value="1-41">
  41 Days
            </option>
            <option data-frequency-type="1" data-frequency-num="42" data-frequency-type-text="Day(s)" value="1-42">
  42 Days
            </option>
            <option data-frequency-type="1" data-frequency-num="43" data-frequency-type-text="Day(s)" value="1-43">
  43 Days
            </option>
            <option data-frequency-type="1" data-frequency-num="44" data-frequency-type-text="Day(s)" value="1-44">
  44 Days
            </option>
            <option data-frequency-type="1" data-frequency-num="45" data-frequency-type-text="Day(s)" value="1-45">
  45 Days
            </option>
                        
            </select>
            {{#shipping_schedule_hover_enable}}
  <a href="javascript:;" class="bold-ro__shipping-tooltip">{{#translate}}shipping_schedule{{/translate}}</a>
            {{/shipping_schedule_hover_enable}}
        </div>
        <input type="hidden" name="frequency_num" class="bold-ro__frequency-num" value="">
        <input type="hidden" name="frequency_type" class="bold-ro__frequency-type" value="">
        <input name="frequency_type_text" class="bold-ro__frequency-type-text" type="hidden" value="">`;  
      
      BOLD.common.eventEmitter.on('BOLD_RECURRING_ORDERS_before_widget_loaded', function(){
      BOLD.recurring_orders.setTemplate('selectableFrequencyInterval', newTemplate, true);

      });