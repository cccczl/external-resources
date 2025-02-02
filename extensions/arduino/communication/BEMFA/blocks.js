/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const QH_BEMFA_COLOR = '#5b67a5'
    const QH_BEMFA_ICO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAC4jAAAuIwF4pT92AAALhWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE4LTA4LTEwVDE5OjI1OjI1KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA0LTEyVDE0OjQzOjMwKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wNC0xMlQxNDo0MzozMCswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NWU5ZWIyZGMtM2U2ZC1kYzRlLTg5MmMtNmJjNjNmZjVkZmUwIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzBmYWUyM2QtZjEzZi02NTRhLTgyZWUtOTE3NWNjNGNiYTdiIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MGViNzZhZTYtNTM4Ny00MDQxLWJhYzYtNjNhNDk4YzlkMGNmIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHRpZmY6T3JpZW50YXRpb249IjEiIHRpZmY6WFJlc29sdXRpb249IjMwMDAwMDAvMTAwMDAiIHRpZmY6WVJlc29sdXRpb249IjMwMDAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6Q29sb3JTcGFjZT0iMSIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjgwMCIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjgwMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MGViNzZhZTYtNTM4Ny00MDQxLWJhYzYtNjNhNDk4YzlkMGNmIiBzdEV2dDp3aGVuPSIyMDE4LTA4LTEwVDE5OjI1OjI1KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjEyOTdhMjQ4LWEwYWUtZDA0OS1hMDE3LTRmMDBlYjc1NjdiMCIgc3RFdnQ6d2hlbj0iMjAxOC0wOC0yOVQxNzo1NzoxMCswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpkYmQ4OWExMy03OTMzLWQzNDUtYTIzNi1lZmIzYjkwYWY2NzAiIHN0RXZ0OndoZW49IjIwMTktMDQtMTJUMTQ6NDM6MzArMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY29udmVydGVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NWU5ZWIyZGMtM2U2ZC1kYzRlLTg5MmMtNmJjNjNmZjVkZmUwIiBzdEV2dDp3aGVuPSIyMDE5LTA0LTEyVDE0OjQzOjMwKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmRiZDg5YTEzLTc5MzMtZDM0NS1hMjM2LWVmYjNiOTBhZjY3MCIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmVlZDRhMDdjLTQ5MjctODI0NC1iZDA0LTNkNmYzMzgwMzVmOSIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjBlYjc2YWU2LTUz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';

    //巴法云主题订阅
    Blockly.Blocks.QDP_tcp_device_cloud_subscription = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QDP_tcp_device_cloud_subscription,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BEMFA_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options:[["TCP创客云","1"], ["TCP设备云","2"], ["图云","4"]]
                    },
                    {
                      type: "field_input",
                      name: "Key",
                      "text": "d9efdd0413ec4b74ab0057a0b8675654"
                    },
                    {
                      type: "field_input",
                      name: "topic",
                      "text": "led002"
                    },
                    {
                      type: "input_dummy"
                    },
                    {
                      type: "input_statement",
                      name: "function"
                    }
                ],
                "tooltip": "巴法云主题订阅",
                colour:QH_BEMFA_COLOR,
                extensions: ['shape_statement']
            });
        }
    };

    //巴法云主题消息发送
    Blockly.Blocks.QDP_tcp_device_cloud_theme_push = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                message1: Blockly.Msg.QDP_tcp_device_cloud_theme_push,
                args0: [
                    {
                        type: 'field_image',
                        src: QH_BEMFA_ICO,
                        width: 40,
                        height: 40
                    }
                ],
                args1: [
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options:[["TCP创客云","1"], ["TCP设备云","2"], ["图云","4"]]
                    },
                    {
                      type: "field_input",
                      name: "Key",
                      "text": "d9efdd0413ec4b74ab0057a0b8675654"
                    },
                    {
                      type: "field_input",
                      name: "topic",
                      "text": "led002"
                    },
                    {
                      type: "input_value",
                      name: "data"
                    }
                ],
                "tooltip": "巴法云主题消息发送",
                colour:QH_BEMFA_COLOR,
                extensions: ['shape_statement']
            });
        }
    };

    //串口打印
    Blockly.Blocks.serialPrint = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.serialPrint,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'type',
                        options:[[(Blockly.Msg.println),"println"], [(Blockly.Msg.print),"print"]]
                    },
                    {
                        type: 'input_value',
                        name: 'VALUE'
                    }
                ],
                "tooltip": "串口打印",
                colour:QH_BEMFA_COLOR,
                extensions: ['shape_statement']
            });
        }
    };

    //变量get
    Blockly.Blocks.QH_variables_get = {
        init: function () {
            this.jsonInit({
                message0: '%1',
                args0: [
                    {
                        type: 'input_value',
                        name: 'VAR'
                    } 
                ],
                "tooltip": "获取变量",
                colour:QH_BEMFA_COLOR,
                extensions: ['output_number']
            });
        }     
    };

    return Blockly;
}

exports = addBlocks;




